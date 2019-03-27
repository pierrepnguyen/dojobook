import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class NewUserComponent implements OnInit {
  errors: any;
  dupError: any;
  user = { username: "", name: "", password: "" };

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

  }
// add Login Function/Registration (1st) Submit is for Registration/Function with two different errors
  onSubmit() {
    let observable = this._httpService.newUser(this.user);
    observable.subscribe(data => {
      console.log(data);
      if (data['dupError']) {
        this.dupError = data['dupError'];
      }
      
      if (data['error']) {
        this.errors = [];
        for (let msg in data['error'].errors) {
          this.errors.push(data['error'].errors[msg].message)
        }
      } 
      
      if (data['success']) {
        console.log('here');
        this._router.navigate(['/users']);
      }
    });

    this.dupError = null;
    this.errors = null;
    this.user = { username: "", name: "", password: "" };

  }
}