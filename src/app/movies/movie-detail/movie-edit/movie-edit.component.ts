import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../movies-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.moviesDataService.selectMovie(this.id);
      }
    );
    this.initForm();

  }
  initForm() {
    this.editMovieForm = new FormGroup({
      'title': new FormControl(this.movie.title, [Validators.required,/*  this.editTitleValidator.bind(this) */]),
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


  /*  editTitleValidator(control: FormControl): Promise<any> | Observable<any> {
     const promise = new Promise<any>((resolve, reject) => {
       let existingItitle = this.movie.title.toLowerCase();
       let formResult = control.value.toLowerCase();
       setTimeout(() => {
         control.valueChanges.subscribe(res => {
           res = formResult;
           if (existingItitle === formResult) {
             console.log('sdf', formResult);
             console.log("existingItitle", existingItitle);
             resolve({ 'titleNotValid': true });
           } else {
             resolve(null);
           }
         })
       }, 1500);
 
     });
     return promise;
   }
  */

}
