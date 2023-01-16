import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient:HttpClient ) {}


  email:any;

  registerUser(register:any)

  {
    return this.httpClient.post<any>('http://localhost:8000/api/v2/register',register)

  }
  getUser() {
    return this.httpClient.get<any>("http://localhost:8000/api/v2/registers/" + this.email);
  }

  HttpLogin(data: any) {
    return this.httpClient.post("http://localhost:8010/api/v1/login", data);
  }
}
