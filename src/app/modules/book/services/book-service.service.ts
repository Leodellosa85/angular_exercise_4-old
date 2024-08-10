import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks = () => {
    return this.http.get(`${this.serverUrl}/books`).pipe(tap((data) => data));
  };

  addBook(book: Book) {
    return this.http.post(`${this.serverUrl}/books`, book).pipe(
      tap((x) => {
        console.log('creating', x);
      })
    );
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.serverUrl}/books/${id}`).pipe(
      tap((x) => {
        console.log('deleting successful', x);
      }),
      
    );
  }

  updateBook(book: Book) {
    return this.http.put(`${this.serverUrl}/books/${book.id}`, book).pipe(
      tap((x) => {
        console.log('updating', x);
      })
    );
  }
}
