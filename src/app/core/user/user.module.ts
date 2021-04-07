import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ControlMessagesComponent} from './../../components/control-messages/control-messages.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, SignUpComponent, SignInComponent, ControlMessagesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { 


}
