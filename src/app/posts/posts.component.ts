import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Subscription } from 'rxjs';

import { PostService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) { }
  subscription: Subscription;
  length = this.postService.posts.length;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  pageEvent: PageEvent;
  newEvent: PageEvent;

  ngOnInit() {
    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: any[]) => {
          this.length = posts.length;
        }
      );
  }

  newPage() {
    if(this.pageEvent === this.newEvent) {console.log('true');} else {this.newEvent = this.pageEvent;}
    // console.log(this.pageEvent.pageSize, this.pageEvent.pageIndex);
    // console.log(this.postService.getPart(this.pageEvent.pageSize, this.pageEvent.pageIndex));
  }

}
