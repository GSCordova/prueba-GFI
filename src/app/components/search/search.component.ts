import { Component, OnInit } from '@angular/core';

// Sevicio dónde se llama a la API
import { PeliculasService } from './../../services/http.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  films: any;
  favFilms: any;
  title: string;
  type: string;
  year: string;

  constructor(public peliculasServ: PeliculasService) {

    if (localStorage.getItem('id') == null) {
      this.favFilms = [];
    } else {
      this.favFilms = localStorage.getItem('id') == null;
    }
  }

  ngOnInit() {
    console.log('---------------');
    console.log(this.favFilms);
  }

  // Función que ejecuta la llamada a la API
  search(title) {
    console.log(this.title);
    this.peliculasServ.getOmdb(title).subscribe(resp => this.films = resp);
  }

  fav(id) {
    if (this.favFilms.includes(id)) {
      this.favFilms.splice(this.favFilms.indexOf(id), 1);
      localStorage.setItem('idPeliculasFavoritas', this.favFilms);
    } else {
      this.favFilms.push(id);
      localStorage.setItem('idPeliculasFavoritas', this.favFilms);
    }
  }
}
