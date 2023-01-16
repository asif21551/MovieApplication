import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private mainService:MainService,private router:Router,private snack:MatSnackBar) { }


  RegistrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', Validators.required),
    profilePicture: new FormControl('', Validators.required),
    gender:new FormControl('',Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[789]\\d{9}")])
  });
  get getUserName() { return this.RegistrationForm.controls['userName']; }
  get getEmail() { return this.RegistrationForm.controls['email']; }
  get getPassword() { return this.RegistrationForm.controls['password']; }
  get getConfirmPassword() { return this.RegistrationForm.controls['confirmPassword']; }
  get getPhoneNumber() { return this.RegistrationForm.controls['phoneNumber']; }
  get getProfilePicture(){ return this.RegistrationForm.controls['profilePicture']; }
  get getGender(){return this.RegistrationForm.controls['gender'];}

  OnRegister() {
    console.table(this.RegistrationForm.value);
    if (this.getPassword.value != this.getConfirmPassword.value) {
      // alert("Your password confirm password should match");
      this.snack.open("Your password & confirm password should match","close");
    }
    else {
      this.mainService.registerUser(this.RegistrationForm.value).subscribe(res=>{
        console.log(res);
        // alert("Account Created Sucessfully")
        this.snack.open("Account Created Sucessfully","close");

        this.router.navigate(["auth/login"]);

      },err=>
      {
        alert("emailId is already exists")
      }
      )

    }
    this.RegistrationForm.reset();
  }

  upload(data: any) {
    console.log(data);
    // this.RegistrationForm.value.file = data.target.files[0].name;
    console.log(this.RegistrationForm.value);
  }


}
