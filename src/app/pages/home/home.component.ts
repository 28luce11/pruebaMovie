import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/core/movie-service.service';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    formGroupMovie: FormGroup;
    movies: any = [];

    constructor(
        private service: MovieServiceService,
        private router: Router,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.formGroupMovie = this.formBuilder.group({
            termino: [
                '', [ Validators.required]
            ]
        });
    }

    searchMovies() {
        this.service.searchsMovies(this.formGroupMovie.value.termino).subscribe(res => {
            console.log(res);
            this.movies = res;
        });
    }

    seeMovie(movie) {
        if (movie) {
            this.router.navigate(['internal/movie/', movie]);
        }
    }
}
