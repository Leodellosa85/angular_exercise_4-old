import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs: Blog[];

  buttons = [
    { label: 'Add', action: 'add' },
    { label: 'Delete All', action: 'deleteAll' }
  ];

  constructor(private blogService: BlogServiceService,private router: Router) {
    this.blogs = blogService.getBlogs();
  }

  executeAction = (event: {
    data: Blog;
    action: string;
  }) => {
    switch (event.action) {
      case 'edit': {
        // navigating to a form
        this.router.navigateByUrl('/blog-form',{state: event.data});
        console.log(`editing ${event.data.title}`);
        break;
      }

      case 'delete': {
        this.blogService.delete(event.data.id);
        console.log(`deleting ${event.data.author}`);
        break;
      }

      case 'add': {
        this.router.navigateByUrl('/blog-form');
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

