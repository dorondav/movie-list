import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-detail/movie-edit/movie-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'movies', component: MoviesComponent, children: [
      { path: ':id', component: MovieDetailComponent },
      { path: ':id/edit', component: MovieEditComponent },
    ]
  },
  { path: 'add-movie', component: AddMovieComponent },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
