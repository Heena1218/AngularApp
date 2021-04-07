import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private message: NzMessageService) { }
  // type can be 'success', 'error', 'warning'
  showSuccess(message: string = 'Operation Successful'): void {
    this.message.create('success', message);
  }

  showError(message: string = 'Oops! Some error occurred'): void {
    this.message.create('error', message);
  }

}
