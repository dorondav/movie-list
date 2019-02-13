import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesDataService } from '../movies-data.service';
import { Movie } from '../movie.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: number;
  closeResult: string;



  constructor(
    private moviesDataService: MoviesDataService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.moviesDataService.selectMovie(this.id);
      }
    );
  }

  onDelete() {
    console.log('item deleted', this.id);
    this.moviesDataService.deleteMovie(this.id);
  }


  onClose() {
    this.router.navigate(['/movies']);
  }


  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
    this.router.navigate(['/movies']);
  }
  openDeleteModal(deleteContent) {
    this.modalService.open(deleteContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
    this.router.navigate(['/movies']);

  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
