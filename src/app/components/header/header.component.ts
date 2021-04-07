import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/common/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  userSignedIn = false;

  constructor(private storageService : StorageService) { }

  ngOnInit(){
    this.userSignedIn = this.storageService.isUserLogin();
  }

  logout(){
    this.storageService.doLogout();
  }

}
