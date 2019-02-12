//* Angular Components */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//* Third Party Components */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//* Costum Components */
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieComponent } from './movies/movies-list/movie/movie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//* Services */
import { MoviesDataService } from './movies/movies-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule,
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
