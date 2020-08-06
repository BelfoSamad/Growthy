import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, Data } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNull } from 'util';

@Component({
  selector: 'app-junior-login',
  templateUrl: './junior-login.component.html',
  styleUrls: ['./junior-login.component.sass']
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
    this.fs.logout();
  }

  jlogin(child) {
    let jlogin = localStorage.getItem('jlogin');
    let firstname = document.querySelector(`#${child} .firstname`).innerHTML;
    if (jlogin) {
      let jloginObj = JSON.parse(jlogin);
      console.log(`${jloginObj['id']} just logged out!`);
      localStorage.removeItem('jlogin');
      document.getElementById(jloginObj['id']).classList.remove('loggedin');
      document.getElementById('loggedin').innerText = `No one is currently logged in!`;
      if (jloginObj['id'] != child) {
        console.log(`${child} just logged in!`);
        let childObj = {};
        childObj['id'] = child;
        childObj['firstname'] = firstname;
        localStorage.setItem('jlogin', JSON.stringify(childObj));
        document.getElementById(child).classList.add('loggedin');
        document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${firstname}</span> is currently logged in!`;
      }
    } else {
      console.log(`${child} just logged in!`);
      let childObj = {};
      childObj['id'] = child;
      childObj['firstname'] = firstname;
      localStorage.setItem('jlogin', JSON.stringify(childObj));
      document.getElementById(child).classList.add('loggedin');
      document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${firstname}</span> is currently logged in!`;
    }
  }
}
