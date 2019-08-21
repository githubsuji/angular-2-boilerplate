import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationInterceptorService } from './interceptors/navigation/navigation-interceptor.service';
import { HttpStatusService } from './services/http-status/http-status.service';
import { HttpListenerService } from './interceptors/http-listener/http-listener.service';
import { AppIdleHandleService } from './services/app-idle-handle/app-idle-handle.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationGuard } from './guards/authorization-guard/authorization.guard';
const CORE_SERVICES = [NavigationInterceptorService, HttpStatusService,
  HttpListenerService, AppIdleHandleService];
const CORE_GUARDS = [ AuthorizationGuard];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [/** SERVICES ARE HERE */
    ...CORE_SERVICES,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpListenerService,
          multi: true
        },
        ...CORE_GUARDS,
  ]
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() core: CoreModule) {
      if (core) {
        throw new Error('You shall nor Run !!!');
      }
   }
 }
