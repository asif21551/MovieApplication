import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }


  _isLoggedIn:boolean=false

  login()
  {
    this._isLoggedIn=true;
    return this._isLoggedIn;
  }

  logout()
  {
    this._isLoggedIn=false;
    this.route.navigate(['/auth/login']);
    return this._isLoggedIn;

  }

}
