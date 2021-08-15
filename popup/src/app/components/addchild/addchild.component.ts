import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
      'watch_time': new FormControl(15, [
        Validators.required,
        Validators.min(5),
        Validators.max(30),
      ]),
      'interests': this.buildInterests()
    });
    console.log(this.getInterests);

  }

  buildInterests() {
    const arr = this.interests.map(interest => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  get firstname() { return this.addChildForm.get("firstname"); }
  get age() { return this.addChildForm.get('age'); }
  get watch_time() { return this.addChildForm.get('watch_time'); }
  get getInterests() { return this.addChildForm.get('interests'); }



  onSubmit() {
    let child = {};

    child["firstname"] = this.firstname.value;
    child["age"] = this.age.value;
    child["last_seen"] = null;
    child["settings"] = {
      watch_time: this.watch_time.value,
    }

    const selectedInterests = this.getInterests.value
      .map((checked, i) => checked ? { name: this.interests[i].name, selected: true } : { name: this.interests[i].name, selected: false });

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
