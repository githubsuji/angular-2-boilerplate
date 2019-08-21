import { Injectable, Inject } from '@angular/core';
import { HttpStatusService } from '../../services/http-status/http-status.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationInterceptorService {

  timer: any;
  constructor(private status: HttpStatusService, @Inject(Router) private router) {
    this.registerNavigationInterceptorEvent(this.router);
  }

  public registerNavigationInterceptorEvent(router: Router) {
    //  console.log('--------------------registerNavigationInterceptorEvent--------');
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  navigationInterceptor(event: RouterEvent): void {
    switch (true) {
      case event instanceof NavigationStart:
      console.log('navigation start');
      this.status.setHttpStatus(true);
      break;
      case event instanceof NavigationEnd:
      console.log('navigation end');
      this.offHttpStatus();
      break;
      case event instanceof NavigationCancel:
      console.log('navigation cancel');
      this.offHttpStatus();
      break;
      case event instanceof NavigationError:
      console.log('navigation error');
      this.offHttpStatus();
      break;
      default:
      console.log('navigation default');
      // console.log(typeof event);
      break;
    }
}
offHttpStatus() {
  this.timer =  setTimeout(() => {
    this.status.setHttpStatus(false);
    clearTimeout(this.timer);
  }, 10);
}
}
