import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
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
