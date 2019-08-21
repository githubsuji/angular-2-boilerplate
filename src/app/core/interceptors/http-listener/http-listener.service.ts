import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpStatusService } from '../../services/http-status/http-status.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpListenerService implements HttpInterceptor {

  timeOutvar: any;
  constructor(@Inject(HttpStatusService) private status,
              @Inject(Router) public router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('request intercepted successfully!');
    // this.status.setHttpStatus(true); // For Page Loader
    this.loadPageLoaderConditionally(req);
    return next.handle(req).pipe(
      map(event => {
        console.log('entered into http interceptor');
        return event;
      }),
      // catchError(error => {
      //   console.log('entered into http catchError');
      //   this.status.setHttpStatus(false);
      //   this.handleSiteminderSessionTimeOut(error);
      //   return Observable.throw(error);
      // }),
      catchError((error: any, caught: Observable<any>) => {
        this.status.setHttpStatus(false);
        this.handleSiteminderSessionTimeOut(error);
        if (caught instanceof Response) {
          try {
            return this.manageErrorAsValidObservableType(caught);
          } catch (e) {
            return Observable.throw(e);
          }
        } else {
          return Observable.throw(caught);
        }
      }),
      finalize(() => {
        this.timeOutvar = setTimeout(() => {
          this.status.setHttpStatus(false);
          clearTimeout(this.timeOutvar);
        }, 2);
      })
    );
  }

  loadPageLoaderConditionally(req: HttpRequest<any>) {
    if (req.body && req.body instanceof FormData) {
      const formData = req.body;
      try {
        const isSkipPageLoad = formData.get('isSkipPageLoad');
        console.log(isSkipPageLoad);
        if ('true' === isSkipPageLoad) {
          console.log('-----No Page Loader required for skipPageloader FileUpload---');
          this.status.setHttpStatus(false);
        } else {
          console.log('----- Page Loader required for FileUpload---');
          this.status.setHttpStatus(true);
        }
      } catch (e) {
        console.log('------Error---Page Loader required');
        this.status.setHttpStatus(true);
      }
    } else {
      console.log('------No FormData ---Page Loader required');
      this.status.setHttpStatus(true);
    }
  }
  handleSiteminderSessionTimeOut(error: any) {
    if (error instanceof HttpErrorResponse) {
      // console.log(error);
      const responseContentType = error.headers.get('Content-Type') + '';
      const expectedContentType = 'text/html';
      console.log(responseContentType);
      // console.log(error.error.text);
      if (responseContentType &&
        responseContentType.toLowerCase().indexOf(expectedContentType) > -1) {
        console.log('entered into responseContentType block');
        const responseBody = error.error.text + '';
        console.log(responseBody);
        const expectedContentPart = 'ACTION="/rxclaimsampling/ui/login.html';
        if (responseBody && responseBody.toLowerCase().indexOf(expectedContentPart.toLowerCase()) > -1) {
          console.log('Siteminder Session Ended');
          this.signOut();
        }
      }
    }
  }
  protected manageErrorAsValidObservableType(response: Response): Observable<any> {
    return of<any>(null);
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/logout']);
  }
}
