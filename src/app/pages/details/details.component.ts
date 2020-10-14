import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/core/movie-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: any = [];

  constructor(private service: MovieServiceService) {

    this.detailsMovie();

  }

 
  ngOnInit(): void {
  }

  detailsMovie() {
    this.service.getMovie(12334).subscribe(res => {
        console.log(res);
        this.movie = res;
    });
}

}
