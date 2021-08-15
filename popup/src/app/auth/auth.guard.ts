import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private authService: FirebaseService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Auth guard activated!");

      let url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.authService.loggedIn) { return true; }

    this.authService.redirectUrl = url;
    // Redirect to the login page
    return this.router.parseUrl('/login');
  }

}
