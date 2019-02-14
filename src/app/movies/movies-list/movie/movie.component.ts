import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie.model';
import { TrimPipe } from '../../../shared/trim.pipe';
import { capitalizeFirstLetterPipe } from '../../../shared/capitalizeLetters.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [TrimPipe, capitalizeFirstLetterPipe]
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie[];
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
