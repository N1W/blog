import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PostsComponent} from './posts/posts.component';
import {ArticleComponent} from './article/article.component';
import {RegistrationComponent} from './registration/registration.component';

const router: Routes = [
  {path: '', redirectTo: '/news/page/1', pathMatch: 'full'},
  {path: ':topic/page/:id', component: PostsComponent, pathMatch: 'full'},
  {path: ':topic/article/:id', component: ArticleComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
