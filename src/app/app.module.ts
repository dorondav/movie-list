//* Angular Components */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//* Third Party Components */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//* Costum Components */
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieComponent } from './movies/movies-list/movie/movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieEditComponent } from './movies/movie-detail/movie-edit/movie-edit.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';

//* Services  & Pipes*/
import { MoviesDataService } from './movies/movies-data.service';
import { TrimPipe } from './shared/trim.pipe';
import { capitalizeFirstLetterPipe } from './shared/capitalizeLetters.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieComponent,
    PageNotFoundComponent,
    HomePageComponent,
    AddMovieComponent,
    TrimPipe,
    capitalizeFirstLetterPipe


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
