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

  newUser(data){
    return this._http.post('/users/new', data);
  } 

  // access id through session for currently logged in user
  // createPost(id: String, data: any) {
  //   return this._http.put('/users/posts/:id', data);
  // }

  getUserByUsername(data: any){
    console.log("Service ", data)
    return this._http.post('/users/login', data);
  }
}

