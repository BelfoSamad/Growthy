import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private fs: FirebaseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.fs.getTests().subscribe(tests => {
      //console.log(tests);
    //});
    //this.router.navigate(['general'], {relativeTo: this.activatedRoute});
  }

}
