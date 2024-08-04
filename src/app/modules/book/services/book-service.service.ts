import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  constructor() { }

  private books: Book[] = [
    {
      id: 1,
      name: 'Eloquent JavaScript, Third Edition',
      authors: ['Marijn Haverbeke','Nicolás Bevacqua'],
      isbn: "9781593279509"
    },
    {
      id: 2,
      name: 'Understanding ECMAScript 6',
      authors: ['Nicholas C. Zakas','Axel Rauschmayer'],
      isbn: "9781593277574"
    },
    {
      id: 3,
      name: 'Learning JavaScript Design Patterns',
      authors: ['Addy Osmani','Kyle Simpson'],
      isbn: "9781449331818"
    },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  executeAction = (book: Book, index: number) => {
    console.log('from parent: ', book.authors, index);
  };

  edit = (id: number) => {
    console.log('Editting this Book with ID: ', id);
  };

  delete = (id: number) => {
    console.log('Deleting this Book with ID: ', id);
  };
}
