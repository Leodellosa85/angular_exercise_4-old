import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm: FormGroup;
  authors: FormArray;

  book: any;

  constructor(private fb: FormBuilder,) {
    this.book = history.state;
    this.bookForm = this.fb.group({
      id: this.book.id,
      name: this.book.name,
      isbn: this.book.isbn,
      authors: this.fb.array(this.book.authors ?? []),
    });

    this.authors = this.bookForm.controls['authors'] as FormArray;
  }

  ngOnInit(): void {
    this.book = history.state;
  }
  
  onSubmit = () => {
    console.log(this.bookForm.value);
    // console.log(this.bookForm.getRawValue())
  };

  addAuthor() {
    this.authors.push(new FormControl(''));
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  clear = () => {
    this.bookForm.reset();
  };
}
