import {Component, Input, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {PostService} from '../../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  page = parseInt(this.router.snapshot.params['id'], 10);
  size = 10;
  pagination = [];
  allPosts: any [];
  posts: any[];
  subscription: Subscription;
  pageSubscription: Subscription;
  @Input() pageSize: number;

  constructor(private postService: PostService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: any[]) => {
          this.page = parseInt(this.router.snapshot.params['id'], 10);
          this.allPosts = posts;
          console.log(this.page);
          this.posts = this.allPosts.slice(((this.page - 1) * this.size), (this.page * this.size));
        }
      );
    this.pageSubscription = this.postService.pageChanged
      .subscribe(
        (page: number) => {
          this.page = page;
          console.log('in post', this.allPosts.length);
          for (let i = this.page; i < (this.page + 5); i++) {
            if (i <= (this.allPosts.length / this.size)) {
              this.pagination.push(i);
            }
            if ((this.allPosts.length / this.size) < 1 && i === 1) {
              this.pagination = [];
              this.pagination.push(i);
            }
          }
        }
      );
    console.log(this.pagination);
  }

  selectPage(selectedPage) {
    if(selectedPage !== this.page){
      this.page = selectedPage - 1;
      this.next();
    }
  }
  next() {
    if (this.page < (this.allPosts.length / this.size)) {
      this.page++;
      this.route.navigate([this.router.snapshot.params['topic'] + '/page/' + this.page]);
      this.posts = this.allPosts.slice(((this.page - 1) * this.size), (this.page * this.size));
      console.log(this.page, this.posts);
      this.pagination = [];
      for (let i = this.page; i < (this.page + 5); i++) {
        if (i <= (this.allPosts.length / this.size)) {
          this.pagination.push(i);
        }
      }
    }
  }
  prev() {
    if (this.page > 1) {
      this.page--;
      this.route.navigate([this.router.snapshot.params['topic'] + '/page/' + this.page]);
      this.posts = this.allPosts.slice(((this.page - 1) * this.size), (this.page * this.size));
      console.log(this.page, this.posts);
      this.pagination = [];
      for (let i = this.page; i < (this.page + 5); i++) {
        if (i <= (this.allPosts.length / this.size)) {
          this.pagination.push(i);
        }
      }
    }
  }

}
