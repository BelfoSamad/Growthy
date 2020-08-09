import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Test } from '../models/test'
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  testsCollection: AngularFirestoreCollection<Test>;
  tests: Observable<Test[]>;
  redirectUrl: string;
  loggedIn = null;
  UID: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    //console.log("Constructor - FS");
    afAuth.authState.subscribe((user) => {
      this.UID = user.uid;
    });
  }

  async register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    )
      .then((authState: firebase.auth.UserCredential) => {
        console.log("Signed up!");
        this.UID = authState.user.uid;
        return authState;
      })
      .catch((err) => {
        throw err;
      });
  }

  async login(email: string, password: string): Promise<any> {
    return this.afAuth
      .auth.signInWithEmailAndPassword(email, password)
      .then((authState) => {
        this.UID = authState.user.uid;
        return authState;
      }
      )
      .catch((err) => {
        throw err;
      });
  }

  async logout(): Promise<any> {
    return this.afAuth
      .auth
      .signOut()
      .then(() => {
        console.log("Logging out.");
        this.UID = null;
      })
      .catch(err => {
        throw err;
      });
  }

  async updateEmail(email: string, password: string, newEmail: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log("Logged in again...");
        return auth.user.updateEmail(newEmail);
      })
      .catch(err => {
        throw err;
      });
  }

  async changePassword(pwd: string, newpwd: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(this.afAuth.auth.currentUser.email, pwd)
      .then(auth => {
        console.log("Logged in again...");
        return auth.user.updatePassword(newpwd);
      })
      .catch(err => {
        throw err;
      });
  }

}
