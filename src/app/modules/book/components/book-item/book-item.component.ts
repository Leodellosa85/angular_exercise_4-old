import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input('bookInput') books: Book [] | undefined;
  @Output() actionEmitter = new EventEmitter();

  executeAction = (data: Book, action: string) => {
    switch (action) {
      case 'edit':
        this.actionEmitter.emit({ data, action });
        console.log('Edit');
        break;

      case 'delete':
        this.actionEmitter.emit({ data, action });
        console.log('delete');
        break;
    }
  };
}
