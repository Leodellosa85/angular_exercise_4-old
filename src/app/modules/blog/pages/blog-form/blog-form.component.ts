import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../../models/blog';
import { title } from 'process';
import { BlogServiceService } from '../../services/blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  comments: FormArray;

  blog: any;

  constructor(private fb: FormBuilder,private blogService: BlogServiceService,private router: Router) {
    this.blog = history.state;
    this.blogForm = this.fb.group({
      id: this.blog.id ?? null,
      title: new FormControl(this.blog.title,[Validators.required]),
      description:  new FormControl(this.blog.description,Validators.required),
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
    if (this.blogForm.value.id == null)
    {
      this.blogForm.removeControl('id');
      this.blogService.addBlog(this.blogForm.value).subscribe((data) => console.log(data));
      this.router.navigateByUrl('/blog');
    }
    else
    {
      this.blogService.updateBlog(this.blogForm.value).subscribe((data) => console.log(data));
      this.router.navigateByUrl('/blog');
    }
   
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

  get f(){
    return this.blogForm.controls;
  }

}

