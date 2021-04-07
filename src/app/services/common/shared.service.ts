import { Injectable } from '@angular/core';

import { UserData } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userPersonalData: UserData;

  setUserData(data: UserData){
    this.userPersonalData = data;
  }

  getUserData(): UserData {
    return this.userPersonalData;
  }

  constructor() { }
}
