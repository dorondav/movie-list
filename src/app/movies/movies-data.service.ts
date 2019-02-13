import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  movieChange = new Subject<Movie[]>();
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

  updateMovie(index: number, newMovie: Movie) {
    this.moviesArray[index] = newMovie;
    this.movieChange.next(this.moviesArray.slice());
  }

  deleteMovie(index: number) {
    this.moviesArray.splice(index, 1);
    this.movieChange.next(this.moviesArray.slice());
  }
}
