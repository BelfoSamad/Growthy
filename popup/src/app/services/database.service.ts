import { Injectable } from '@angular/core';
import { } from '@angular/fire'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { FirebaseService } from './firebase.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  userId: string;

  constructor(private mDb: AngularFireDatabase, private mAuth: AngularFireAuth) {
   mAuth.authState.subscribe(user => this.userId = user ? user.uid : null);
  }

  addParent(UID: string, body: object) {
    return this.mDb.object(`/${UID}`).set(body);
  }

  getParent() {
    if (!this.userId) return;
    return this.mDb.object(`/${this.userId}`);
  }
  
  updateParent(data = null) {
    if (!this.userId) return;
    return this.mDb.object(`/${this.userId}`).update(data);
  }

  addChild(body: object) {
    return this.mDb.list(`/${this.userId}/children`).push(body);
  }

  getChildren(query = null): AngularFireList<any[]> {
    if (!this.userId) return;
    return this.mDb.list(`/${this.userId}/children`, query);
  }

  getChild(childId: string): AngularFireObject<any[]> {
    if (!this.userId) return;
    return this.mDb.object(`/${this.userId}/children/${childId}`);
  }

  updateChild(childId: string, data = null) {
    if (!this.userId) return;
    return this.mDb.object(`/${this.userId}/children/${childId}`).update(data);
  }

  deleteChild(childId) {
    if (!this.userId) return;
    let child = this.mDb.object(`/${this.userId}/children/${childId}`);
    return child.remove();
  }

  getHistory(childId): AngularFireList<any[]> {
    if (!this.userId) return;
    return this.mDb.list(`/${this.userId}/children/${childId}/history`);
  }
}
