import { Component } from '@angular/core';
import { IntroComponent } from './components/intro/intro.component';

import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(){}

  ngOnInit() {
  }

}
