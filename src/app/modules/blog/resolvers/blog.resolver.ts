import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogServiceService } from '../services/blog-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class blogResolver implements Resolve<Object> {
  constructor(private blogService: BlogServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Object> {
    return this.blogService.getBlogs();
  }
}

