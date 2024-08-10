import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBlogs = () => {
    return this.http.get(`${this.serverUrl}/blogs`).pipe(tap((data) => data));
  };

  addBlog(blog: Blog) {
    return this.http.post(`${this.serverUrl}/blogs`, blog).pipe(
      tap((x) => {
        console.log('creating', x);
      })
    );
  }

  deleteBlog(id: number) {
    return this.http.delete(`${this.serverUrl}/blogs/${id}`).pipe(
      tap((x) => {
        console.log('deleting successful', x);
      }),
      
    );
  }

  updateBlog(blog: Blog) {
    return this.http.put(`${this.serverUrl}/blogs/${blog.id}`, blog).pipe(
      tap((x) => {
        console.log('updating', x);
      })
    );
  }

}

