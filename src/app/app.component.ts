import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  response: any;
  title: string;

  constructor(public http: PeliculasService) {
    this.title = 'harry';
  }

  ngOnInit() {
    this.search(this.title);
  }

  search(title) {
    this.http.getOmdb(title).subscribe(resp => this.response = resp);
  }

}

