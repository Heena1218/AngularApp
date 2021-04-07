import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class QoowkInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authToken = '';
    if (this.storage.getSessionId()) {
      authToken = this.storage.getSessionId();
    }
    else {
      authToken = '';
    }
    req = req.clone({
      setHeaders: {
        Authorization: `${authToken}`,
        'Content-Type': 'application/json'
      },
    });
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.body.status_code === 500 || event.body.status_code === 401) {
              console.log(event.body.status_code);
              this.storage.doLogout();
              this.router.navigateByUrl('/');
            }
          }
          return event;
        }),
        // Retry on failure
        retry(2),
        // Handle errors
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
          console.log(`HTTP Error: ${req.url}`);
          return throwError(error);
        }),
        // PROFILING
        finalize(() => {
          const profilingMsg = `${req.method} "${req.urlWithParams}"`;
        })
      );
  }

}
