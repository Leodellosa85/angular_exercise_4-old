import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BookFormComponent } from './pages/book-form/book-form.component';



@NgModule({
  declarations: [
    BookItemComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,BookRoutingModule,SharedModule,ReactiveFormsModule,MatListModule,MatButtonModule
  ]
})
export class BookModule { }
