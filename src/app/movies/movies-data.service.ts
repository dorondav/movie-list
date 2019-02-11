import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from './movie.model';
import { Observable } from 'rxjs/';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  private _omdb_key = "ed83f1b9";
  moviesArray = ['betman', 'Guardians of the Galaxy'];
  private _url: string = `http://www.omdbapi.com/?t=${this.moviesArray}&apikey=${this._omdb_key}`;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    console.log(`test: ${this.moviesArray} `);

    return this.http.get<Movie[]>(this._url);
  }

}
