import { Injectable } from '@angular/core';
import {BaseService} from '../base/base.service'
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

userLoginApi(data:any){

  return this.httpClient.post<any>(this.getApiRoutes.userLoginAPIUrl, data)
  .pipe(map(response => {
    return response;
  }));

}

userSignupApi(data:any){

  return this.httpClient.post<any>(this.getApiRoutes.userSignUpAPIUrl, data)
  .pipe(map(response => {
    return response;
  }));

}

 
}
// map tap Observables rxJs

// pipe --  angular library to manipulate data.
// this.httpClient.post<return Type>(url, data).
// map rxjs function  to transform the data.