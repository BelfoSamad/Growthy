import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editchild',
  templateUrl: './editchild.component.html',
  styleUrls: ['./editchild.component.sass']
})
export class EditchildComponent implements OnInit, OnDestroy {

  editChildForm: FormGroup;
  childObs;
  childSub: Subscription;
  child;
  childId;
  error: any;

  constructor(private router: Router, private route: ActivatedRoute, public mDb: DatabaseService) {
    this.childId = this.route.snapshot.paramMap.get('child');
  }

  ngOnInit(): void {
    this.editChildForm = new FormGroup({
      'firstname': new FormControl('', [
        Validators.required
      ]),
      'age': new FormControl('', [
        Validators.required,
        Validators.min(4),
        Validators.max(16),
      ]),
      'watch_time': new FormControl(15, [
        Validators.required,
        Validators.min(5),
        Validators.max(30),
      ])
    });
    this.childObs = this.mDb.getChild(this.childId).valueChanges();
    this.childSub = this.childObs.subscribe(child => {
      this.child = child;
      this.initilizeForm();
    });
  }

  get firstname() { return this.editChildForm.get("firstname"); }
  get age() { return this.editChildForm.get('age'); }
  get watch_time() { return this.editChildForm.get('watch_time'); }

  onSubmit() {
    console.log("SUBMITTT!");

    let child = {};

    child["firstname"] = this.firstname.value;
    child["age"] = this.age.value;
    child["watch_time"] = this.watch_time.value;
  

    this.mDb.updateChild(this.childId, child)
      .then(_ => console.log(`${this.child.firstname} updated!`))
      .catch(err => console.log(err));
    this.router.navigate([`/dashboard/${this.childId}`]);
  }

  initilizeForm() {
    this.firstname.setValue(this.child.firstname, { emitEvent: false });
    this.age.setValue(this.child.age, { emitEvent: false });
    this.watch_time.setValue(this.child.watch_time, { emitEvent: false });
  }


  ngOnDestroy() {
    console.log("Destroyed!");
    this.childSub.unsubscribe();
  }
}
