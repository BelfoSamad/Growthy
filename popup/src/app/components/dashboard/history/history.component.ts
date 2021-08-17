import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  @Input() browse: boolean;
  histories: Observable<any[]> = null;

  constructor(public mDb: DatabaseService) {
  }

  ngOnInit(): void {
    //get histories
    this.histories = this.mDb.getHistory().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

}
