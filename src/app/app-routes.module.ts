import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news/news.component';
import {MoviesComponent} from './movies/movies.component';
import {SerialsComponent} from './serials/serials.component';
import {BooksComponent} from './books/books.component';

const router: Routes = [
  {path: '', redirectTo: '/news/page/1', pathMatch: 'full'},
  {path: ':topic/page/:id', component: NewsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
