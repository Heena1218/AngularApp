import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../services/common/storage.service';
@Injectable({
  providedIn: 'root'
})
export class OtherGuard implements CanActivate {

  constructor(private storageService: StorageService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.storageService.isUserLogin()){
        this.router.navigate(['/']);
    }
    return !this.storageService.isUserLogin();
  }
  
}
