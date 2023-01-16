import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit{
  titleMovie: string | undefined;
  recommendedMovies: any;
  allRecommendedMovies: any;
  Recommeneded:boolean=false;
  constructor(private service: MovieService) {
    this.titleMovie = this.service.movieName;
  }


  ngOnInit(): void {
    this.service.getAllRecommendedMovies(this.service.recommendedMovieId).subscribe(res => {
      this.recommendedMovies = res;
      this.allRecommendedMovies = this.recommendedMovies.results;
      console.log("this is the recommended movies");
      console.log(this.allRecommendedMovies);
    })
  }
  movieDetails(data: any) {
    this.service.particularMovieData(data);
  }


}
