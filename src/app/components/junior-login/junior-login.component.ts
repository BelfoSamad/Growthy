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

    if (jlogin) {
      console.log(jlogin);
      document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${jlogin}</span> is currently logged in!`;
      let checkLogin = setInterval(function () {
        let element = document.getElementById(jlogin);
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
    this.children = this.db.getChildren().valueChanges();
  }

  async logout() {
    //this.router.navigate(['/login']);
    this.fs.logout();
  }

  jlogin(child) {
    let jlogin = localStorage.getItem('jlogin');
    if (jlogin) {
      console.log(`${jlogin} just logged out!`);
      localStorage.removeItem('jlogin');
      document.getElementById(jlogin).classList.remove('loggedin');
      document.getElementById('loggedin').innerText = `No one is currently logged in!`;
      if (jlogin != child) {
        console.log(`${child} just logged in!`);
        localStorage.setItem('jlogin', child);
        document.getElementById(child).classList.add('loggedin');
        document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${child}</span> is currently logged in!`;
      }
    } else {
      console.log(`${child} just logged in!`);
      localStorage.setItem('jlogin', child);
      document.getElementById(child).classList.add('loggedin');
      document.getElementById('loggedin').innerHTML = `<span class="fs-14 ac-background-75 p-1 rounded italic">${child}</span> is currently logged in!`;
    }
  }
}
