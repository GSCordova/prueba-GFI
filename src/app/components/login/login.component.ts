import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  gianmarco: boolean;

  constructor(private router: Router) {
    this.gianmarco = true;
   }

  ngOnInit() {
  }

  verification() {
    if (this.gianmarco) {
      this.router.navigate(['/search']);
    }
  }

}
