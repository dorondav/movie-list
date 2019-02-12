import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  moviesArray: Movie[] = [];

  constructor(private http: HttpClient) { this.getMovieFromJson() }

  getMovieFromJson() {
    return this.http.get('assets/data/movies.json')
      .subscribe(data => {
        for (let i = 0; i < 3; i++) {
          this.moviesArray.push(<Movie>data[i])
        }
        // console.log('getMovieFromJson', this.moviesArray);
      })
  }

  getMovies() {
    return this.moviesArray
  }

  selectMovie(index: number) {
    return this.moviesArray[index];
  }

}
