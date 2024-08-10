import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';

@Injectable({
  providedIn: 'root',
})

export class bookResolver implements Resolve<Object> {
  constructor(private bookService: BookServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Object> {
    return this.bookService.getBooks();
  }
}
