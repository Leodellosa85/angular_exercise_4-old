import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { blogResolver } from './resolvers/blog.resolver';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    resolve: {blogs: blogResolver},
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'blog-form',
    component: BlogFormComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BlogRoutingModule { }
