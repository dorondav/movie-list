import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesArray: Movie[];
  constructor(private moviesDataService: MoviesDataService) { }

  ngOnInit() {
    this.moviesArray = this.moviesDataService.getMovies()
    console.log('movies-list', this.moviesArray);

  }
}
