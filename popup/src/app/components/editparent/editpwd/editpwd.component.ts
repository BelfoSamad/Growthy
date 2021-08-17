import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-editpwd',
  templateUrl: './editpwd.component.html',
  styleUrls: ['./editpwd.component.sass']
})
export class EditpwdComponent implements OnInit {

  editPasswordForm: FormGroup;
  parentObs: Observable<any>;
  sub: Subscription;
  parent: any;
  oldEmail: string;
  error: any;

  constructor(private router: Router, private mDb: DatabaseService, private mAuth: FirebaseService) { }

  ngOnInit(): void {
    this.editPasswordForm = new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'new_password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
    this.parentObs = this.mDb.getParent().valueChanges();
  }

  get password() { return this.editPasswordForm.get("password"); }
  get new_password() { return this.editPasswordForm.get("new_password"); }

  async onSubmit() {
    await this.mAuth.changePassword(this.password.value, this.new_password.value)
      .then(_ => {
        console.log("Password changed");
        this.router.navigate([`/dashboard`]);
      })
      .catch(err => {
        console.error(err);
        switch (err.code) {
          case "auth/wrong-password":
            this.error = "Incorrect password. Try again";
            break;
          default:
            this.error = "Something went wrong. Try again";
        }
      });
  }

  ngOnDestroy() {
  }


}
