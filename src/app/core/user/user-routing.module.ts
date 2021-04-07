import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [{ path: '', component: UserComponent },  {path: 'sign-up', component: SignUpComponent }, {path: 'sign-in', component: SignInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
