import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: any;

  constructor(private router: Router, private firebaseService: FirebaseService, private db: DatabaseService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
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
      'confirm_password': new FormControl('', [
        Validators.required
      ]),
      'agree': new FormControl('', [
        Validators.requiredTrue
      ])
    });

  }

  get fullname() { return this.registerForm.get("fullname"); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('confirm_password'); }

  confirmedPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let pass = this.registerForm.get('password').value;
      let confirmPass = this.registerForm.get('confirm_password').value;
      return pass === confirmPass ? { 'unconfirmed': true } : null;
    };
  }

  onSubmit() {
    this.register();
  }

  async register() {
    this.firebaseService.register(this.email.value, this.password.value)
      .then(message => {
        if (message != null) {
          this.db.addParent(this.firebaseService.UID, { fullname: this.fullname.value });
          this.router.navigate(['']);
        }
      })
      .catch((err) => {
        this.error = err.message;
        console.error(err);
      }
      );
  }
}
