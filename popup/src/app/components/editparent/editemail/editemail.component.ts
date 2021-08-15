import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router, Data } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-editemail',
  templateUrl: './editemail.component.html',
  styleUrls: ['./editemail.component.sass']
})
export class EditemailComponent implements OnInit {

  editEmailForm: FormGroup;
  parentObs: Observable<any>;
  sub: Subscription;
  parent: any;
  oldEmail: string; 
  error: any;

  constructor(private router: Router, private db: DatabaseService, private fs: FirebaseService) { }

  ngOnInit(): void {
    this.editEmailForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
    this.parentObs = this.db.getParent().valueChanges();
    this.sub = this.parentObs.subscribe(p => {
      this.oldEmail = p['email'];
      this.email.setValue(this.oldEmail || "");
    });
  }

  get email() { return this.editEmailForm.get("email"); }
  get password() { return this.editEmailForm.get("password"); }

  async onSubmit() {
    await this.fs.updateEmail(this.oldEmail, this.password.value, this.email.value)
      .then(_ => {
        this.fs.afAuth.currentUser.then(user => {
          if (user.email != this.oldEmail){
            this.db.updateParent({email: this.email.value})
            this.router.navigate([`/dashboard`]);
          }
        });
      })
      .catch(err => {
        switch(err.code) {
          case "auth/wrong-password":
            this.error = "Incorrect password. Try again";
            break;
          default:
            this.error = "Something went wrong. Try again";
        }
      });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
