import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../services/user/user.service'

import { tap, first } from 'rxjs/operators';
import { StorageService } from 'src/app/services/common/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  constructor(
    private route: Router,
    private storage: StorageService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  submitted = false;
  

  

  userSignupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  signupUser() {
    this.submitted = true;
    if (this.userSignupForm.valid) {
      this.postSignupApi(this.userSignupForm.value);
    }
  }

  resetUserSignupForm() {
   
    this.submitted = false;
  }

  postSignupApi(userData?: any) {
    this.userService.userSignupApi(userData).pipe(first())
      .subscribe(
        response => {
        
            this.resetUserSignupForm();
            this.storage.setSessionId(response.accessToken);
            this.route.navigateByUrl('/');
         
        },
        error => {
          console.log(error);
        }
      );
  }

}
