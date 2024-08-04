import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'My 1st Blog',
      description: 'Travelling alone',
      author: 'Marijn Haverbeke',
      comments: ['Travelling alone is fantastic','Finding your self'],
    },
    {
      id: 2,
      title: 'My 2nd Blog',
      description: 'Going to Japan with my honney',
      author: 'Nicholas C. Zakas',
      comments: ['Eating Ramen','Going to tourist spot'],
    },
    {
      id: 3,
      title: 'My 3rd Blog',
      description: 'Eating diffrerent cuisine',
      author: 'Addy Osmani',
      comments: ['Eating in different towns','Tasting delicious foods'],
    },
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }

  edit = (id: number) => {
    console.log('Editting this Blog with ID: ', id);
  };

  delete = (id: number) => {
    console.log('Deleting this Blog with ID: ', id);
  };
}

