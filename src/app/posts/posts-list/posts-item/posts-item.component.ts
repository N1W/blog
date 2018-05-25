import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit {
  @Input() posts: any;
  @Input() index: number;

  constructor(private http: Http, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
  }

  openArticle(articleId){
    this.route.navigate([this.router.snapshot.params['topic'] + '/article/' + articleId]);
  }

}
