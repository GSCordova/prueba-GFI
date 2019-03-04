import { Component } from '@angular/core';

import { PeliculasService } from './../../services/http.service';

import { Pelicula } from './../../services/interface/pelicula';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  films: Pelicula;
  favFilms: any;
  title: string;

  constructor(public peliculasServ: PeliculasService) {
    this.title = '';
  // Verifico si hay Peliculas guardadas como favoritas
    if (localStorage.getItem('idPeliculasFavoritas') == null) {
      this.favFilms = [];
    } else {
      this.favFilms = localStorage.getItem('idPeliculasFavoritas').split(',');
    }
  }

  // Función que ejecuta la llamada a la API
  search() {
    this.peliculasServ.getOmdb(this.title).subscribe(resp => this.films = resp);
  }

  // Guarda y borra el ID de las peliculas favoritas en el LocalStorage.
  fav(id) {
    if (this.favFilms.includes(id)) {
      this.favFilms.splice(this.favFilms.indexOf(id), 1);
      localStorage.setItem('idPeliculasFavoritas', this.favFilms);
    } else {
      this.favFilms.push(id);
      localStorage.setItem('idPeliculasFavoritas', this.favFilms);
    }
  }

  // Verifico si la pelicula a buscar ya está agregada a favoritos.
  isFav() {
    if (this.favFilms.includes(this.films.imdbID)) {
      return true;
    } else {
      return false;
    }
  }

}
