import { Component } from '@angular/core';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

import { PeliculasService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})

export class AppComponent {

  constructor(public http: PeliculasService) {
    this.elim();
  }

  elim() {
    const DEBUG = false;
    if (!DEBUG) {
    if (!window.console) {
      window.console = {};
      }
    const methods = ['log', 'debug', 'warn', 'info', 'error'];
    for (let i = 0 ; i < methods.length; i++) {
        console[methods[i]] = function() {};
      }
    }
  }

}

