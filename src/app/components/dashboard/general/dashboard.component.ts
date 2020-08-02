import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public children: Observable<any[]> = null;

  constructor(private router: Router, public fs: FirebaseService, public db: DatabaseService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getChildren();
    }, 100)
  }

  async getChildren() {
    console.log("Dashboard - getChildren()");
    this.children = this.db.getChildren().valueChanges();
  }

}
