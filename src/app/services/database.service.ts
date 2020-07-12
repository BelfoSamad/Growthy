import { Injectable } from '@angular/core';
import { } from 'angularfire2'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  userId: string;

  constructor(private db: AngularFireDatabase, private fs: AngularFireAuth) {
    fs.authState.subscribe(user => this.userId = user ? user.uid : null);
  }

  addParent(UID: string, body: object) {
    return this.db.object(`/parents/${UID}`).set(body);
  }

  getParent() {
    if (!this.userId) return;
    return this.db.object(`/parents/${this.userId}`);
  }

  addChild(body: object) {
    return this.db.list(`/parents/${this.userId}/children_info`).push(body);
  }

  getChildren(): AngularFireList<any[]> {
    if (!this.userId) return;
    return this.db.list(`/parents/${this.userId}/children_info`);
  }
}
