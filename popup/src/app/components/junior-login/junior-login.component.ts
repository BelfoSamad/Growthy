///<reference types="chrome"/>
import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, Data } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNull } from 'util';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-junior-login',
  templateUrl: './junior-login.component.html',
  styleUrls: ['./junior-login.component.sass'],
  animations: [
    trigger('childAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: "translateX(-25px)" }),
        animate('.5s ease-in-out', style({ opacity: 1, transform: "translateX(0px)" }))
      ])
    ])
  ]
})
export class JuniorLoginComponent implements OnInit, AfterViewInit {

  loggedIn: boolean = false;

  public parent;
  public children: Observable<any[]> = null;


  constructor(private router: Router, public fs: FirebaseService, public db: DatabaseService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getChildren();
    }, 100)
  }

  ngAfterViewInit() {
    let jlogin = localStorage.getItem('jlogin');
    let jloginObj = JSON.parse(jlogin);

    if (jlogin) {
      document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${jloginObj['firstname']}</span> is currently logged in!`;
      //Send Child Data to background
      let checkLogin = setInterval(function () {
        let element = document.getElementById(jloginObj['id']);
        if (element) {
          element.classList.add('loggedin');
          console.log("Logged in!");
          clearInterval(checkLogin);
        }
      }, 1000);
    }
    else {
      document.getElementById('loggedin').innerHTML = `No one is currently logged in!`;
    }
  }

  async getChildren() {
    this.children = this.db.getChildren().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  async logout() {
    //this.router.navigate(['/login']);
    localStorage.removeItem('jlogin');
    this.fs.logout();
  }

  jlogin(child) {
    let jlogin = localStorage.getItem('jlogin');
    let firstname = document.querySelector(`#${child.key} .firstname`).innerHTML;
    let c = {};
    chrome.runtime.sendMessage({ mode: 'Popup', action: 'Reset' });
    // Someone was logged in
    if (jlogin) {
      // Lets log him out!
      let jloginObj = JSON.parse(jlogin);
      console.log(`${jloginObj['id']} just logged out!`);
      localStorage.removeItem('jlogin');
      document.getElementById(jloginObj['id']).classList.remove('loggedin');
      document.getElementById('loggedin').innerText = `No one is currently logged in!`;
      // Log in the new child, only if the one who logged out is not him!
      if (jloginObj['id'] != child.key) {
        console.log(`Adding logged-in class to ${child.key}`);
        document.getElementById(child.key).classList.add('loggedin');
        console.log(`${child.key} just logged in!`);
        let childObj = {};
        childObj['id'] = child.key;
        childObj['firstname'] = firstname;
        localStorage.setItem('jlogin', JSON.stringify(childObj));

        document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${firstname}</span> is currently logged in!`;
        c['last_seen'] = new Date().getTime();
        //Send Child Data to background
        chrome.runtime.sendMessage({ mode: 'Popup', child: child, parent_uid: this.fs.UID });
        //this.db.updateChild(child, c);
      }
    }
    // No one was logged in! Log this child in directly.
    else {
      console.log(`Adding logged-in class to ${child.key}`);
      document.getElementById(child.key).classList.add('loggedin');
      console.log(`${child.key} just logged in!`);
      let childObj = {};
      childObj['id'] = child.key;
      childObj['firstname'] = firstname;
      localStorage.setItem('jlogin', JSON.stringify(childObj));
      document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${firstname}</span> is currently logged in!`;
      c['last_seen'] = new Date().getTime();
      //Send Child Data to background
      chrome.runtime.sendMessage({ mode: 'Popup', child: child, parent_uid: this.fs.UID });
      //this.db.updateChild(child, c);
    }
  }
}
