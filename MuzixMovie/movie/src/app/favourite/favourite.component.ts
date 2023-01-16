import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{
  favmovieDatabase:any=[];
favouriteMovie:any=[];
  constructor(private movieService:MovieService,private router:Router,private snack :MatSnackBar){

  }
  ngOnInit(): void {
    this.getFavouriteMovie();


  }
  getFavouriteMovie() {
    this.movieService.getFavouriteMoviesByEmail().subscribe(res => {
      this.favmovieDatabase = res;
      console.log(this.favmovieDatabase);
      this.favmovieDatabase.forEach((id: any) => {
        this.movieService.getAllFavouriteMoviesFromApi(+id.movieId).subscribe((response) => {

          this.favouriteMovie.push(response);
        });
      })
    });
  }
  movieDetails(data: any) {
    this.movieService.particularMovieData(data);
  }


  deleteMovie(data:any) {


    this.movieService.deleteFavouriteMovie(data.id).subscribe(res=>{
      console.log(res);
    },err=>{
      // alert("movie deleted successfully");

    })
    this.movieService.deleteFavouriteFromMovieService(data.id).subscribe(res=>{


      console.log(res);


    this.snack.open("Delete Successfully","close")
      // alert("Delete Successfully");


      //  window.location.reload();
//
    })
    // window.location.reload();

    this.router.navigate(["dashboard/home"]);

  }



}
