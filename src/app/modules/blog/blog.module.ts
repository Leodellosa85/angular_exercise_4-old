import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [
    BlogItemComponent,
    BlogListComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,BlogRoutingModule,SharedModule,ReactiveFormsModule,MatListModule,MatButtonModule 
  ]
})
export class BlogModule { }

