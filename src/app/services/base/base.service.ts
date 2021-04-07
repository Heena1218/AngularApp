import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {App as AppConfig} from '../../config';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected router: Router, protected httpClient: HttpClient, protected appConfig : AppConfig) { }

  get getHttpClient() {
    return this.httpClient;
  }

  get getAppConfig(){
    return this.appConfig;
  }

  get getApiRoutes(){
  return this.getAppConfig.getApiRoutes;
    
  }


}

