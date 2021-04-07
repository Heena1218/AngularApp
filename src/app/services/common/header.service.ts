import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  public title$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Dashboard'
  );

  constructor() { }

  private setHeaderValue(title) {
    this.title$.next(title);
  }

  public getHeader(): Observable<string> {
    return this.title$.asObservable();
  }

  public setHeader(value: string): void {
    this.setHeaderValue(value);
  }

}











