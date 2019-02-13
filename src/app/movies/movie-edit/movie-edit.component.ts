import { Component, OnInit, Input } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Movie } from '../movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie;
  id: number;
  editMovieForm: FormGroup


  constructor(
    private moviesDataService: MoviesDataService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.moviesDataService.selectMovie(this.id);
        console.log('edit ', this.id);
      }
    );
    this.initForm();

  }
  initForm() {
    this.editMovieForm = new FormGroup({
      'title': new FormControl(this.movie.title, Validators.required),
      'director': new FormControl(this.movie.director, Validators.required),
      'year': new FormControl(this.movie.year, Validators.required),
      'runtime': new FormControl(this.movie.runtime, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
      'genre': new FormControl(this.movie.genre, Validators.required),
      'serialNumber': new FormControl(this.movie.serialNumber),

    })

  }

  onUpdateMovie() {
    this.moviesDataService.updateMovie(this.id, this.editMovieForm.value);
  }


  onDelete() {
    console.log('item deleted', this.id);
    this.moviesDataService.deleteMovie(this.id);
  }
}
