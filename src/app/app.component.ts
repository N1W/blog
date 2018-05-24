import {Component, OnInit} from '@angular/core';
import {PostService} from './posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  url: string;
  constructor (private postService: PostService, private route: Router, private router: ActivatedRoute) {}

  ngOnInit() {
    this.postService.getPosts('https://jsonplaceholder.typicode.com/posts');
  }
}
