import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public loading = false;
  public submitted = false;
  public registrationError = false;
  public registrationSuccess = false;
  public message: any;
  public registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
  ) { 
    this.registrationForm = this.fb.group(
      {
        firstName: new FormControl('',[Validators.required]),
        lastName: '',
        email:['', [Validators.required,Validators.email]],
			  password: ['', [Validators.required, Validators.minLength(6)]],
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.registrationError = false;
    this.registrationSuccess = false;
    if (this.registrationForm.invalid)
    {
      return;
    }
    this.loading = true;
    this.userService.register(this.registrationForm.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.loading = false;
                  if (JSON.parse(JSON.stringify(data)).error) {
                    this.registrationError = true;
                    this.message = "User already registered!";
                  } else {
                    this.registrationSuccess = true;
                    this.message = "User registered successfully!";
                    this.router.navigateByUrl('user');
                  }
                },
                error => {
                    this.loading = false;
                    this.registrationError = true;
                    this.message = error.error;
                }
            );

  }

  get f(){
    return this.registrationForm.controls;
  }
}
