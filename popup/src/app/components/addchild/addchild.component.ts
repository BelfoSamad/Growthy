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
      ])
    });

  }

  get firstname() { return this.addChildForm.get("firstname"); }
  get age() { return this.addChildForm.get('age'); }
  get watch_time() { return this.addChildForm.get('watch_time'); }


  onSubmit() {
    let child = {};

    child["firstname"] = this.firstname.value;
    child["age"] = this.age.value;
    child["watch_time"] = this.watch_time.value;

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
