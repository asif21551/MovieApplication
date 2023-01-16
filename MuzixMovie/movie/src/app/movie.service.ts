import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

private MyAPIKey: string = "da102f76c5bcf96db8e2eef69ffa8ef3";


constructor(private http: HttpClient,private router:Router) {}
// movieName:string;
movieName:string | undefined;
currentPage:number=1;
movieDetails:any;
recommendedMovieId:any;
favMovie:any={};
email:any;

  particularMovieData(data: any) {
  this.movieDetails = data;
  this.router.navigate(['/dashboard/movie-info']);
  }
  // display all Movies
  getAllMoviesdetails(currentPage:number) {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.MyAPIKey}&page=${currentPage}`;
  return this.http.get<any>(url);
  }


  // getting one movie details
  getParticularMovieDetails(movieId:number)
  {
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.MyAPIKey}&append_to_response=credits`;
  return this.http.get<any>(url);
  }
 //to get all the favourite movies from the Api by Movie Id.
 getAllFavouriteMoviesFromApi(movieId:number){
let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.MyAPIKey}&append_to_response=credits`;
return this.http.get<any>(url);
}

  getAllRecommendedMovies(recMovieId:number)
  {
    // let recommendedUrl= `https://api.themoviedb.org/3/movie/${recMovieId}?api_key=${this.MyAPIKey}&language=en-US&page=1`;

  let recommendedUrl=`https://api.themoviedb.org/3/movie/${recMovieId}/recommendations?api_key=${this.MyAPIKey}&language=en-US&page=1`;
  return this.http.get(recommendedUrl);
  }


  addMovieToFavourites(movieId:number,movieName:any){
  console.log(this.email);
  this.favMovie.movieId=movieId;
  this.favMovie.movieName=movieName;
  this.favMovie.email=this.email;
  console.log(this.favMovie);
  return this.http.post("http://localhost:8000/api/v3/register",this.favMovie);
}

getFavouriteMoviesByEmail()
{
  return this.http.get("http://localhost:8005/api/v4/favourite/"+this.email)
}



// Search movies
searchMovie(searchItem:any,currentPage:number){
  console.log("i am inside the movie service");
  console.log(searchItem);
  let searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=${this.MyAPIKey}&language=es&query=${searchItem}&page=${currentPage}`
  console.log(searchUrl);
  // console.log(this.y);
  return this.http.get(searchUrl);
  // return this.http.getRequest("searchUrl");
}



deleteFavouriteMovie(delMovieId:String){
  return this.http.delete("http://localhost:8005/api/v4/deleteFavourite/"+delMovieId);
}
deleteFavouriteFromMovieService(delMovieId:String){
  return this.http.delete("http://localhost:8000/api/v3/deleteFavourite/"+delMovieId);
}


}
