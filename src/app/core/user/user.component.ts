import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service'

import{tap,first} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(
    
  ): void {
    this.loginUser({email:'sharmaheena599',password: 'heenahsrma'});
  }

  loginUser(data) {
    this.userService.userLoginApi(data).pipe(first())
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      );
  }
}
// pipe to transform the data 
// subscribe getting the data runs function ansynchronously 