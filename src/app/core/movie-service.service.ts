import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieServiceService {

    private urlMovies = 'http://api.tvmaze.com';

    constructor(private http: HttpClient) { }


    searchsMovies(movie: string) {

        let url =  `${this.urlMovies}/search/shows?q=${movie}`;

        return this.http.get(url).pipe(map(res => {

            console.log (res);
            return res;
        }));
    }

    getMovie(id) {
        let url =  `${this.urlMovies}/shows/${id}`;

        return this.http.get(url).pipe(map(res => {
            console.log (res);
            return res;
        }));
    }
}
