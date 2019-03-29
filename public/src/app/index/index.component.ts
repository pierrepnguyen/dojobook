import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../../../../backend/models.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // obtain id from session
  id: String;
  newPost: any; 
  errors: any;
  User: User;

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  // addPost(post) {
  //   // make sure id is correct syntax
  //   this._httpService.createPost(this.id, post)
  //     .subscribe(data => {
  //       console.log("Added a post!", data);
  //       this.newPost = data; 
  //       if (data['errors']) {
  //         this.errors = data['errors'];
  //         this._router.navigate(['/home']);
  //       }
  //       else {
  //         this._router.navigate(['/home']);
  //       }
  //     })
  // }
}
