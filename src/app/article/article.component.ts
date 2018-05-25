import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  testdata: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.testdata = this.router.snapshot.params['topic'] + this.router.snapshot.params['id'];
  }

}
