import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    isLogIn: any=this.auth._isLoggedIn;
  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private mainservice:MainService,private auth:AuthService) {}


  ngOnInit(): void {
    console.log(this.isLogIn)
    if(this.isLogIn==true)
    {
      this.getUserByEmail();

    }
  }



  searchingItems(text:string)
  {
  if (text.length == 0) {
    return;
  }
  console.log(text);
  this.router.navigate(['/dashboard/search-items', text])

}

user:any;
userName:any;
genderMale:any;
genderFemale:any;

getUserByEmail()
{
  this.mainservice.getUser().subscribe(res=>{
    this.user=res;
    this.userName=this.user.userName;
    if(this.user.gender=='male')
    {
      this.genderMale=this.user.gender;
    }

    else
    {
      this.genderFemale=='female';
      this.genderFemale=this.user.gender;
    }

console.log(this.user);

  })
}

loggedOut()
  {this.auth.logout();


  }

}
