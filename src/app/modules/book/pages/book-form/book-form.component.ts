import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm: FormGroup;
  authors: FormArray;

  book: any;

  constructor(private fb: FormBuilder,private bookService: BookServiceService,private router: Router) {
    this.book = history.state;
    this.bookForm = this.fb.group({
      id: this.book.id ?? null,
      name: new FormControl(this.book.name,[Validators.required]),
      isbn: new FormControl(this.book.isbn,[Validators.required]),
      authors: this.fb.array(this.book.authors ?? []),
    });

    this.authors = this.bookForm.controls['authors'] as FormArray;
  }

  ngOnInit(): void {
    this.book = history.state;
  }
  
  onSubmit = () => {
    console.log(this.bookForm.value);
    if (this.bookForm.value.id == null)
    {
      this.bookForm.removeControl('id');
      this.bookService.addBook(this.bookForm.value).subscribe((data) => console.log(data));
      this.router.navigateByUrl('/book');
    }
    else
    {
      this.bookService.updateBook(this.bookForm.value).subscribe((data) => console.log(data));
      this.router.navigateByUrl('/book');
    }
  };

  addAuthor() {
    this.authors.push(new FormControl(''));
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  clear = () => {
    this.bookForm.reset();
  }

  get f(){
    return this.bookForm.controls;
  }
}
