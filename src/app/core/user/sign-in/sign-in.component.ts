import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../services/user/user.service'

import { tap, first } from 'rxjs/operators';
import { StorageService } from 'src/app/services/common/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  constructor(
    private route: Router,
    private storage: StorageService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  submitted = false;
  checkingUser = true;
  showLoginForm = false;

  checkUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  loginUser() {
    this.submitted = true;
    if (this.userLoginForm.valid) {
      this.postLoginApi(this.userLoginForm.value);
    }
  }

  resetUserLoginForm() {
    this.checkUserForm.reset();
    this.submitted = false;
  }

  postLoginApi(userData?: any) {
    this.userService.userLoginApi(userData).pipe(first())
      .subscribe(
        response => {
         
            this.resetUserLoginForm();
            this.storage.setSessionId(response.accessToken);
            this.route.navigateByUrl('/');
        
        },
        error => {
          console.log(error);
        }
      );
  }

}