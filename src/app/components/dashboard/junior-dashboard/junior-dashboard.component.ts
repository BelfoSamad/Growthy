import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-junior-dashboard',
  templateUrl: './junior-dashboard.component.html',
  styleUrls: ['./junior-dashboard.component.sass']
})
export class JuniorDashboardComponent implements OnInit {

  public child: Observable<any[]> = null;
  nointerests = false;

  constructor(private route: ActivatedRoute, public fs: FirebaseService, public db: DatabaseService) { }

  ngOnInit(): void {
    let childId = this.route.snapshot.paramMap.get('child');
    setTimeout(() => {
      this.getChild(childId);
    }, 100)
  }

  async getChild(childId) {
    this.child = this.db.getChildren(ref => ref.orderByChild('firstname').equalTo(childId)).valueChanges();
    this.child.subscribe((child) => {
      console.log(child);
      this.nointerests = child[0]['interests'].every((interest) => {
        return interest['selected'] == false;
      });
    })
  }

}
