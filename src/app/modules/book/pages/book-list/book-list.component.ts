import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: Book[] | undefined;

  buttons = [
    { label: 'Add', action: 'add' },
    { label: 'Delete All', action: 'deleteAll' }
  ];

  constructor(private bookService: BookServiceService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data['books']);
      this.books = data['books'];
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
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
        this.bookService.deleteBook(event.data.id).subscribe((data) => { console.log(data), this.reloadCurrentRoute() });
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
