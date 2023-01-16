import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-playmovie',
  templateUrl: './playmovie.component.html',
  styleUrls: ['./playmovie.component.css']
})
export class PlaymovieComponent {
  allmovie1:any
allmovie:any
particularMovieGenre:any
movies:any;
particulartitle:any
particularrelease:any
particularoverview:any;
particularbackdrop_path:any

  constructor(private movie:MovieService){
    this.allmovie1=this.movie.movieDetails;
    this.allmovie=this.allmovie1.id
    this.getMovie();


  }


  getMovie()
  {
    this.movie.getParticularMovieDetails(this.allmovie).subscribe(res=>{

      console.log(res);
      this.movies=res;
    this.particulartitle=this.movies.original_title;
      this.particularMovieGenre=this.movies.genres;
      this.particularrelease=this.movies.release_date;
      this.particularoverview=this.movies.overview;
      this.particularbackdrop_path=this.movies.backdrop_path;
      console.log(this.particularMovieGenre);

  })

}

}

