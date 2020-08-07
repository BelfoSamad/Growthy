import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { RegisterComponent } from './components/register/register.component';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JuniorLoginComponent } from './components/junior-login/junior-login.component';
import { DashboardComponent } from './components/dashboard/general/dashboard.component';
import { JuniorDashboardComponent } from './components/dashboard/junior-dashboard/junior-dashboard.component';
import { HistoryComponent } from './components/dashboard/history/history.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MainComponent } from './components/dashboard/main/main.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';


import { FirebaseService } from './services/firebase.service';
import { AddchildComponent } from './components/addchild/addchild.component';
import { EditchildComponent } from './components/editchild/editchild.component';
import { EditparentComponent } from './editparent/editparent.component'

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RegisterComponent,
    LoginComponent,
    JuniorLoginComponent,
    DashboardComponent,
    JuniorDashboardComponent,
    HistoryComponent,
    HeaderComponent,
    BreadcrumbComponent,
    MainComponent,
    AddchildComponent,
    EditchildComponent,
    EditparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase, 'growthy'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [FirebaseService, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
