import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

import {Subject} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PostService {
  postChanged = new Subject<any[]>();
  posts: any[] = [];

  constructor(private http: Http, private route: ActivatedRoute) {}

  getPosts(url) {
    console.log(url);
    this.http.get(url)
      .subscribe(
        (response: Response) => {
          this.posts = response.json();
          console.log(this.posts);
          this.postChanged.next(this.posts.slice());
        }
      );
  }

  getPart(size, index){
    console.log((size * index), (size * (index + 1)));
      return this.posts.slice((size * index), (size * (index + 1)));
  }
}
