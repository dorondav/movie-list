import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesDataService } from '../movies-data.service';
import { Movie } from '../movie.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  newMovieForm: FormGroup;
  movie: Movie[];

  constructor(private movieDataService: MoviesDataService) { }

  ngOnInit() {
    this.movie = this.movieDataService.getMovies();


    this.initForm();
  }
  initForm() {
    this.newMovieForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'director': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'runtime': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
      'genre': new FormControl(null, Validators.required),
      'serialNumber': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),

    });

    this.newMovieForm.patchValue({
      'serialNumber': Math.floor(Math.random() * 1000) + 126
    }
    );
  }

  onSaveNewMovie() {
    this.movieDataService.addNewMovie(this.newMovieForm.value);
    this.newMovieForm.reset();
  }

}

