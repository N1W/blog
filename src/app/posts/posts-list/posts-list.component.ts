import {Component, Input, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {PostService} from '../../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: any[];
  subscription: Subscription;
  @Input() pageSize: number;

  constructor(private postService: PostService) { }

  ngOnInit() {


    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: any[]) => {
          this.posts = posts;
        }
      );
  }

}
