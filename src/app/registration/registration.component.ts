import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {PostService} from '../posts.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private postService: PostService) { }

  ngOnInit() {
  }

  registrateUser() {
    this.authenticationService.updateGuestStatus(false);
    this.postService.getPosts('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
