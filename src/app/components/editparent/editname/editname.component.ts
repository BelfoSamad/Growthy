import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-editname',
  templateUrl: './editname.component.html',
  styleUrls: ['./editname.component.sass']
})
export class EditnameComponent implements OnInit, OnDestroy {

  editNameForm: FormGroup;
  parentObs: Observable<any>;
  sub: Subscription;
  parent: any;
  error: any;

  constructor(private router: Router, private db: DatabaseService) { }

  ngOnInit(): void {
    this.editNameForm = new FormGroup({
      'fullname': new FormControl('', [
        Validators.required
      ])
    });
    this.parentObs = this.db.getParent().valueChanges();
    this.sub = this.parentObs.subscribe(p => {
      this.fullname.setValue(p['fullname'] || "");
    });
  }

  get fullname() { return this.editNameForm.get("fullname"); }

  onSubmit() {
    this.db.updateParent({fullname: this.fullname.value})
    this.router.navigate([`/dashboard`]);
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
