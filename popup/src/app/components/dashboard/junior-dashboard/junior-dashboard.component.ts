///<reference types="chrome"/>
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-junior-dashboard',
  templateUrl: './junior-dashboard.component.html',
  styleUrls: ['./junior-dashboard.component.sass']
})
export class JuniorDashboardComponent implements OnInit, OnDestroy, OnChanges {

  public child: Observable<any[]> = null;
  histories: Observable<any[]> = null;
  childSub: Subscription;
  nointerests;
  childId;

  constructor(private router: Router, private route: ActivatedRoute, public fs: FirebaseService, public db: DatabaseService) {
    this.childId = this.route.snapshot.paramMap.get('child');
  }

  ngOnInit(): void {
    console.log(this.childId);

    this.child = this.db.getChild(this.childId).valueChanges();
    this.childSub = this.child.subscribe((child) => {
      this.nointerests = child['interests'].every((interest) => {
        return interest['selected'] == false;
      });
    });

    //get histories based in childId
    this.histories = this.db.getHistory(ref =>
      this.childId ? ref.orderByChild('child_id').equalTo(this.childId) : ref).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnChanges() {
    let sub = this.child.subscribe((child) => {
      this.nointerests = child['interests'].every((interest) => {
        return interest['selected'] == false;
      });
    });
    sub.unsubscribe();
    console.log(this.nointerests);
  }

  deleteChild(childId = this.childId) {
    console.log(childId);
    chrome.runtime.sendMessage({ mode: 'Popup', action: 'Reset' });
    this.db.deleteChild(childId)
      .then(_ => console.log(`${childId} deleted successfully!`))
      .catch(_ => console.log(_));
    let jlogin = localStorage.getItem('jlogin');
    if (jlogin) {
      let jloginObj = JSON.parse(jlogin);
      if (jloginObj['id'] == this.childId) localStorage.removeItem('jlogin');
    }
    this.router.navigate([`/dashboard`]);
  }

  ngOnDestroy() {
    this.childSub.unsubscribe();
  }

}
