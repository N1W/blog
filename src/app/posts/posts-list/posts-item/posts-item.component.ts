import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit {
  @Input() posts: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
