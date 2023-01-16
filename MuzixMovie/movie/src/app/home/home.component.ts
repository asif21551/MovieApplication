import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private movieS: MovieService) {
    this.getMovies();
  }

  movies: any = []
  allMoviesfromapi: any = []
  currentPg:number=1;

  ngOnInit(): void {
  }
  getMovies() {
    this.movieS.getAllMoviesdetails(this.currentPg).subscribe(res => {
      this.movies = res;
      console.log(this.movies);
      this.allMoviesfromapi = this.movies.results;
      console.log(this.allMoviesfromapi);
    })
  }

  decreasePage(){
    this.currentPg--;
    this.getMovies();
  }
  increasePage(){
    this.currentPg++;
    this.getMovies();
  }

  movieDetails(data: any) {
    console.log(data);
    this.movieS.particularMovieData(data);
  }
}
