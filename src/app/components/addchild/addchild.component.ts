import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router} from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.sass']
})
export class AddchildComponent implements OnInit {

  addChildForm: FormGroup;
  error: any;
  interests = [
    { name: "sport", selected: false },
    { name: "anime", selected: false },
    { name: "action", selected: false },
  ]


  constructor(private fs: FirebaseService, private db: DatabaseService, private router: Router, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.addChildForm = new FormGroup({
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

  get firstname() { return this.addChildForm.get("firstname"); }
  get age() { return this.addChildForm.get('age'); }
  get pause_duration() { return this.addChildForm.get('pause_duration'); }
  get pause_interval() { return this.addChildForm.get('pause_interval'); }
  get getInterests() { return this.addChildForm.get('interests'); }



  onSubmit() {
    let child = {};

    child["firstname"] = this.firstname.value;
    child["age"] = this.age.value;
    child["last_seen"] = null;
    child["settings"] = {
      pause_duration: this.pause_duration.value,
      pause_interval: this.pause_interval.value
    }

    const selectedInterests = this.getInterests.value
      .map((checked, i) => checked ? this.interests[i].name : null)
      .filter(v => v !== null);

    child["interests"] = selectedInterests;

    //console.log(child);
    this.addChild(child);
  }

  move(source, destination) {
    console.log(source, destination);
    document.getElementById(source).classList.add('d-none');
    document.getElementById(source).classList.remove('d-flex');
    document.getElementById(destination).classList.add('d-flex');
    document.getElementById(destination).classList.remove('d-none');
  }

  async addChild(child) {
    this.db.addChild(child);
    this.router.navigate(['']);
  }
}
