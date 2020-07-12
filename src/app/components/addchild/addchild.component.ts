import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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
    });
  }

  get firstname() { return this.addChildForm.get("firstname"); }
  get age() { return this.addChildForm.get('age'); }

  onSubmit() {
    this.addChild();
  }

  async addChild() {
    let child = {
      firstname: this.firstname.value,
      age: this.age.value
    }
    this.db.addChild(child);
    this.router.navigate(['']);
  }
}
