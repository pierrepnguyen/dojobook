import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
<<<<<<< HEAD
// import { User } from '../../../../backend/models'
=======
import { User } from '../../../../backend/models.js';
>>>>>>> 8350785a7ee0dc9d900fe185bc9b6dffbebd6c72

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // obtain id from session
  id: String;
  newPost: any = {
    post: '',
  } 
  errors: any;
<<<<<<< HEAD
  username: String;
  // username: User; 
=======
  User: User;
>>>>>>> 8350785a7ee0dc9d900fe185bc9b6dffbebd6c72

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('user');
    // console.log(username);
    console.log(this.username);
    // this.getPosts();
  }

  addPost(posts) {
    // make sure id is correct syntax
    this._httpService.createPost(this.username, posts)
      .subscribe(data => {
        console.log("This is the username ", this.username);
        console.log("Added a post!", data);
        this.newPost = data; 
        if (data['errors']) {
          this.errors = data['errors'];
          this._router.navigate(['/home']);
        }
        else {
          this._router.navigate(['/home']);
        }
      })
  }

  // getPosts() {
  //   this._httpService.allPost() 
  //     .subscribe(data => {
  //       console.log("Got our posts!", data);
  //       this.newPost = data['newPost'];
  //     })
  // }
}
