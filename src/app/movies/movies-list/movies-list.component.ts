import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies = [];
  constructor(private movieDs: MoviesDataService) { }

  ngOnInit() {
    this.movieDs.getMovies()
      .subscribe(data => {
        this.movies = data;
        console.log(this.movies);
      })
  }


}
