import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  allPost() {
    return this._http.get('/users');
  }
  newUser(user){
    return this._http.post('/users/newUser', user);
  } 
  // getAll(){
  //   return this._http.get('/authors');
  }

