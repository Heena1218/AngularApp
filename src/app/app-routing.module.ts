import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherGuard} from './guards/other.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [{ path: 'user', canActivate: [OtherGuard],loadChildren: () => import('./core/user/user.module').then(m => m.UserModule) }, { path: '', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) }, { path: 'products', loadChildren: () => import('./core/products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//arrow functions