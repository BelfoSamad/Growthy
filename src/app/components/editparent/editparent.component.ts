import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editparent',
  templateUrl: './editparent.component.html',
  styleUrls: ['./editparent.component.sass']
})
export class EditparentComponent implements OnInit {

  editParentForm: FormGroup;
  error: any;
  parent: Observable<any>;

  constructor(private router: Router, private fs: FirebaseService, private db: DatabaseService) { }

  ngOnInit(): void {
    this.editParentForm = new FormGroup({
      'fullname': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'new_password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
    this.parent = this.db.getParent().valueChanges();
  }

}
