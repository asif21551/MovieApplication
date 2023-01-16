import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit{
favouriteMovieId:number=0;
favouriteMovieName:any;
  particularmovieData:any;
  savedEmail:any;
  movies: any = [];
  particularMovieGenre: any;

  constructor(private mviS: MovieService,private recommended:RecommendedComponent,private nav:Router) { }
  ngOnInit(): void {

    this.particularmovieData = this.mviS.movieDetails;
    console.log(this.particularmovieData);
    this.getMovieData();

  }

  getMovieData(){
    this.mviS.getParticularMovieDetails(this.particularmovieData.id).subscribe(res=>{
   this.movies=res;
   console.log(this.movies);
   this.particularMovieGenre=this.movies.genres;
   console.log(this.particularMovieGenre);
   this.mviS.recommendedMovieId = this.movies.id;
   console.log("this is recommended");
   console.log(this.mviS.recommendedMovieId);

    })

  }


  passRecommended(movieTitle:string)
{
  this.mviS.movieName=movieTitle
  console.log(this.mviS.movieName)

}
alert:boolean=false;
warningAlert:boolean=false;

addToFavourite(selectedMovieData:any)
{
this.favouriteMovieId=this.particularmovieData.id;
this.favouriteMovieName=this.particularmovieData.original_title;
this.savedEmail=this.mviS.email;
console.log(this.savedEmail)
this.mviS.addMovieToFavourites(this.favouriteMovieId,this.favouriteMovieName).subscribe(res=>{

  console.log(res);
  console.log("movie added successfully")
  this.alert=true;
},

err=>{
  this.warningAlert=true;
}
)

}



closeAlert() {
  this.alert = false;
  this.warningAlert = false;
}


play()
{
  this.nav.navigate(["dashboard/playmovie"]);
}
}
