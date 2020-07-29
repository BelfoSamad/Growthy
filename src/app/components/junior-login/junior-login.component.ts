import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class JuniorLoginComponent implements OnInit {

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

  async getChildren() {
    this.children = this.db.getChildren().valueChanges();
  }

  async logout() {
    //this.router.navigate(['/login']);
    this.fs.logout();
  }

}
