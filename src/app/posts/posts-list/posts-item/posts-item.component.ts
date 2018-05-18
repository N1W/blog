import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit {
  @Input() posts: any;
  @Input() index: number;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  // sendPost() {
  //   console.log('im here in fc');
  //   this.http.get('http://94.45.133.18:53000/articles')
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error occured');
  //       }
  //     );
  // }

}
