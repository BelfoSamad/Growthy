import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { map } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [
    trigger('childAnim', [
      transition(':enter', [
        style({ opacity: .5, transform: "translateX(-5px)" }),
        animate('.3s ease-in-out', style({ opacity: 1, transform: "translateX(0px)" }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  public children: Observable<any[]> = null;
  public parent: Observable<any> = null;

  constructor(private router: Router, public fs: FirebaseService, public db: DatabaseService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getChildren();
      this.parent = this.db.getParent().valueChanges();
    }, 100)
  }

  async getChildren() {
    this.children = this.db.getChildren().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
}
