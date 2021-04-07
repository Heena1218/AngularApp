import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends BaseService{

  private readonly SESSION_ID: string = 'SESSION_ID';
  private readonly REFRESH_ID: string = 'REFRESH_ID';

  getSessionId() {
    return localStorage.getItem(this.SESSION_ID);
  }

  setSessionId(id) {
    localStorage.setItem(this.SESSION_ID, id);
  }

  getRefreshId() {
    return localStorage.getItem(this.REFRESH_ID);
  }

  setRefreshId(id) {
    localStorage.setItem(this.REFRESH_ID, id);
  }

  isUserLogin() {
    return !!this.getSessionId();
  }

  doLogout() {
    localStorage.removeItem(this.SESSION_ID);
    localStorage.removeItem(this.REFRESH_ID);
  }
}

//Guards
//canActivate () Modules
//canActivate Child () component