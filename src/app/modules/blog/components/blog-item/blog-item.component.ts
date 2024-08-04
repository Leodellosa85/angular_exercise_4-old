import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input('blogInput') blogs: Blog [] | undefined;
  @Output() actionEmitter = new EventEmitter();

  executeAction = (data: Blog, action: string) => {
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
