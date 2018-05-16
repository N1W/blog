import {Component, OnInit} from '@angular/core';
import {PostService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  constructor (private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts('https://jsonplaceholder.typicode.com/posts');
  }
}
