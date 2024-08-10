import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { jwtDecode } from "jwt-decode"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public overlayDisplay = false;
	public loginError = false;

	public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
  ) { 
    this.loginForm = this.fb.group(
      {
        email:['', [Validators.required,Validators.email]],
			  password: ['', [Validators.required]],
      }
    )
  }

  onSubmit(): void {

    if (this.loginForm.invalid)
    {
      return;
    }

    this.overlayDisplay = true;
    this.loginError =  false;

    this.userService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
          .subscribe(
            (data) => {
              this.overlayDisplay = false;
              this.router.navigateByUrl('user/profile');
              console.log("success");
             
            },
            (error) => {
              this.overlayDisplay = false;
              this.loginError =  true;
              console.log("error");
            }
          )
  }

  get f(){
    return this.loginForm.controls;
  }

}
