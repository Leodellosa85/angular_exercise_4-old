import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[];

  buttons = [
    { label: 'Add', action: 'add' },
    { label: 'Delete All', action: 'deleteAll' }
  ];

  constructor(private bookService: BookServiceService,private router: Router) {
    this.books = bookService.getBooks();
  }

  executeAction = (event: {
    data: Book;
    action: string;
  }) => {
    switch (event.action) {
      case 'edit': {
        // navigating to a form
        this.router.navigateByUrl('/book/book-form',{state: event.data});
        console.log(`editing ${event.data.name}`);
        break;
      }

      case 'delete': {
        this.bookService.delete(event.data.id);
        console.log(`deleting ${event.data.isbn}`);
        break;
      }

      case 'add': {
        this.router.navigateByUrl('/book/book-form');
        console.log('add...');
        break;
      }
      case 'deleteAll': {
        console.log('deleteAll...');
        break;
      }
    }
  };
}
