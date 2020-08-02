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
  childObs: Observable<any[]> = null;
  childList: any = null;
  childSub: Subscription;
  child: any = null;
  interests = [
    { name: "sport", selected: false },
    { name: "anime", selected: false },
    { name: "action", selected: false },
  ];
  error: any;

  constructor(private router: Router, private route: ActivatedRoute, public fs: FirebaseService, public db: DatabaseService) { }

  ngOnInit(): void {

    let childId = this.route.snapshot.paramMap.get('child');
    setTimeout(() => {
      this.getChild(childId);
    }, 10)

    this.editChildForm = new FormGroup({
      'firstname': new FormControl('', [
        Validators.required
      ]),
      'age': new FormControl('', [
        Validators.required,
        Validators.min(4),
        Validators.max(16),
      ]),
      'pause_duration': new FormControl(15, [
        Validators.required,
        Validators.min(5),
        Validators.max(30),
      ]),
      'pause_interval': new FormControl(15, [
        Validators.required,
        Validators.min(10),
        Validators.max(30),
      ]),
      'interests': this.buildInterests()
    });
  }

  buildInterests() {
    const arr = this.interests.map(interest => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  get firstname() { return this.editChildForm.get("firstname"); }
  get age() { return this.editChildForm.get('age'); }
  get pause_duration() { return this.editChildForm.get('pause_duration'); }
  get pause_interval() { return this.editChildForm.get('pause_interval'); }
  get getInterests() { return this.editChildForm.get('interests'); }

  onSubmit() {
    console.log("SUBMITTT!");
    
    let child = {};

    child["firstname"] = this.firstname.value;
    child["age"] = this.age.value;
    child["last_seen"] = null;
    child["settings"] = {
      pause_duration: this.pause_duration.value,
      pause_interval: this.pause_interval.value
    }

    const selectedInterests = this.getInterests.value
      .map((checked, i) => checked ? { name: this.interests[i].name, selected: true } : { name: this.interests[i].name, selected: false });

    child["interests"] = selectedInterests;
    this.db.updateChild(ref => ref.orderByChild('firstname').equalTo(this.child.firstname), child);
    this.router.navigate(['/dashboard/' + child['firstname']]);
  }

  async getChild(childId) {
    this.childList = this.db.getChildren(ref => ref.orderByChild('firstname').equalTo(childId));
    this.childObs = this.childList.valueChanges();
    this.childSub = this.childObs.subscribe((list) => {
      this.child = list[0];
      this.initilizeForm();
    })
  }

  initilizeForm() {
    this.firstname.setValue(this.child.firstname, {emitEvent: false});
    this.age.setValue(this.child.age, {emitEvent: false});
    this.pause_duration.setValue(this.child.settings.pause_duration, {emitEvent: false});
    this.pause_interval.setValue(this.child.settings.pause_interval, {emitEvent: false});
    let interests = this.child.interests;
    for (let i = 0; i < interests.length; i++) {
      this.getInterests['controls'][i].setValue(interests[i].selected, {emitEvent: false});
    }
  }


  ngOnDestroy() {
    console.log("Destroyed!");
    
    this.childSub.unsubscribe();
  }
}
