import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { JuniorLoginComponent } from './components/junior-login/junior-login.component';
import { DashboardComponent } from './components/dashboard/general/dashboard.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { JuniorDashboardComponent } from './components/dashboard/junior-dashboard/junior-dashboard.component';
import { HistoryComponent } from './components/dashboard/history/history.component';


import { AuthGuard } from './auth/auth.guard';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AddchildComponent } from './components/addchild/addchild.component';
import { EditchildComponent } from './components/editchild/editchild.component';
import { EditpwdComponent } from './components/editparent/editpwd/editpwd.component';
import { EditnameComponent } from './components/editparent/editname/editname.component';
import { EditemailComponent } from './components/editparent/editemail/editemail.component';

const redirectLoggedInToLogin = () => redirectLoggedInTo(['login']);
const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: () => redirectUnauthorizedTo(['login'])
        }
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: ':child',
        component: JuniorDashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      authGuardPipe: () => redirectLoggedInTo([''])
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'editchild/:child',
    component: EditchildComponent
  },
  {
    path: 'addchild',
    component: AddchildComponent,
  },
  {
    path: '',
    component: JuniorLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectUnauthorizedTo(['login'])
    }
  },
  {
    path: 'editname',
    component: EditnameComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'editpwd',
    component: EditpwdComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'editemail',
    component: EditemailComponent,
    canActivate: [AngularFireAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
