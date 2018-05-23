import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

import {Subject} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PostService {
  postChanged = new Subject<any[]>();
  pageChanged = new Subject<number>();
  posts: any[] = [];

  constructor(private http: Http, private route: ActivatedRoute) {}

  getPosts(url) {
    this.http.get(url)
      .subscribe(
        (response: Response) => {
          this.posts = response.json();
          console.log(this.posts);
          this.postChanged.next(this.posts.slice());
          this.pageChanged.next(1);
        }
      );
  }
}
