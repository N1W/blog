import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news/news.component';
import {MoviesComponent} from './movies/movies.component';
import {SerialsComponent} from './serials/serials.component';
import {BooksComponent} from './books/books.component';

const router: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsComponent, pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent, pathMatch: 'full'},
  {path: 'serials', component: SerialsComponent, pathMatch: 'full'},
  {path: 'books', component: BooksComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
