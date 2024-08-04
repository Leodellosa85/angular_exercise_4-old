import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from '../../models/blog';
import { title } from 'process';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  comments: FormArray;

  blog: any;

  constructor(private fb: FormBuilder,) {
    this.blog = history.state;
    this.blogForm = this.fb.group({
      id: this.blog.id,
      title: this.blog.title,
      description: this.blog.description,
      author: this.blog.author,
      comments: this.fb.array(this.blog.comments ?? []),
    });

    this.comments = this.blogForm.controls['comments'] as FormArray;
  }

  ngOnInit(): void {
    this.blog = history.state;
  }
  
  onSubmit = () => {
    console.log(this.blogForm.value);
    // console.log(this.blogForm.getRawValue())
  };

  addComment() {
    this.comments.push(new FormControl(''));
  }

  deleteComment(index: number) {
    this.comments.removeAt(index);
  }

  clear = () => {
    this.blogForm.reset();
  };

}

