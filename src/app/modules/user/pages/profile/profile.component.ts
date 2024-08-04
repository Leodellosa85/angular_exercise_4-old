import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: 1,
      name: new FormControl('fly'),
      email: 'leodellosa85@gmail.com',
      bio: '',
      status: true,
    });
  }

  onSubmit = () => {
    console.log(this.userForm.value);
    // console.log(this.userForm.getRawValue())
  };

  clear = () => {
    this.userForm.reset();
  };
}
