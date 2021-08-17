import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, RoutesRecognized } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { filter, pairwise } from 'rxjs/operators';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: any;
  previousUrl: any;

  constructor(private mAuth: FirebaseService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.login();
  }

  async login() {
    this.mAuth.login(this.email.value, this.password.value)
      .then(user => {
        if (user != null)
          this.router.navigate(['']);
      })
      .catch((err) => {
        this.error = err.message;
      }
      );
  }

}
