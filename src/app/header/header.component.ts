import { Component, OnInit } from '@angular/core';
import {PostService} from '../posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  goTo(url) {
    this.postService.getPosts(url);
  }

}
