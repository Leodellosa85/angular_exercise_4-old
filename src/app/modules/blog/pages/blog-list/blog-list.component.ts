import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] | undefined;

  buttons = [
    { label: 'Add', action: 'add' },
    { label: 'Delete All', action: 'deleteAll' }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data['blogs']);
      this.blogs = data['blogs'];
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  executeAction = (event: {
    data: Blog;
    action: string;
  }) => {
    switch (event.action) {
      case 'edit': {
        // navigating to a form
        this.router.navigateByUrl('/blog/blog-form', { state: event.data });
        console.log(`editing ${event.data.title}`);
        break;
      }

      case 'delete': {
        this.blogService.deleteBlog(event.data.id).subscribe((data) => { console.log(data), this.reloadCurrentRoute() });
        console.log(`deleting ${event.data.author}`);
        break;
      }

      case 'add': {
        this.router.navigateByUrl('/blog/blog-form');
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


