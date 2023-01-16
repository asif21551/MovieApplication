import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MainService } from '../main.service';
import { MovieService } from '../movie.service';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailLocal:any;
  constructor(private mainService: MainService,private movieService:MovieService,private authService:AuthService, public router: Router,private snack:MatSnackBar) { }



  LoginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get getEmail() {
    return this.LoginForm.controls['email']
  }
  get getPassword() {
    return this.LoginForm.controls['password']
  }
  loggedin(): void {
    this.emailLocal = this.LoginForm.value.email;
    this.mainService.email=this.LoginForm.value.email;
    this.movieService.email=this.LoginForm.value.email;
    console.log(this.movieService.email)
    this.mainService.HttpLogin(this.LoginForm.value).subscribe((a) => {
      console.log(a);
      this.authService.login();

      this.snack.open("Login Successful","close");

      // alert("Login Successfull");
      this.router.navigate(["dashboard/home"]);
    },
      err => {
        this.snack.open("Invalid username or password","close");
        // alert("Invalid username or password");
        this.LoginForm.reset();
      })
    this.LoginForm.reset({});
    console.log("reset");

  }


}
