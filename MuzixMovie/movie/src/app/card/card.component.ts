import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Searchmovies:any;
  currentPg:number=1
  constructor(private service:MovieService){
    console.log("it is working")
    console.log(this.Searchmovies);
  }


  movieDetails(movie:any)
  {
this.service.particularMovieData(movie);
  }


  decreasePage(){
    this.currentPg--;

  }
  increasePage(){
    this.currentPg++;

  }


}
