import { Injectable, Inject } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment,
   ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTHORIZATION_CONFIG } from './authorization-config';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild, CanLoad {
  ROLE: any;
  DENIED_PATH = 'denied';
  CURRENT_URL: string;
  constructor(@Inject(Router) public router,
              @Inject(ActivatedRoute) public activatedRoute
  ) {
  // listen to events from Router
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // event is an instance of NavigationEnd, get url!
      this.CURRENT_URL = event.urlAfterRedirects;
      //   console.log('url is', this.CURRENT_URL);
    }
  });
}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.doAuthorizedNavigation(state);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.doAuthorizedNavigation(state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  doAuthorizedNavigation(state: RouterStateSnapshot): boolean {
    console.log(state.url);
    console.log(state);
    this.ROLE = AUTHORIZATION_CONFIG[state.url.split('?')[0]];
    const PERMISSIONS = JSON.parse(localStorage.getItem('PERMISSIONS'));
    console.log(PERMISSIONS);
    console.log(this.ROLE);
    if (this.ROLE === 'AUTHORIZED' || (PERMISSIONS && PERMISSIONS[this.ROLE])) {
      return true;
    } else {
      this.router.navigate([this.DENIED_PATH]);
    }
    return false;
  }
}
