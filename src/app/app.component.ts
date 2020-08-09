import { Component } from '@angular/core';
import { IntroComponent } from './components/intro/intro.component';

import { FirebaseService } from './services/firebase.service';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        query(':leave', [
          style({
            display: "none"
          })
        ], { optional: true }),
        query(':enter', [
          style({
            opacity: 0
          }),
          animate('.15s ease-in-out',
            style({
              opacity: 1
            }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
