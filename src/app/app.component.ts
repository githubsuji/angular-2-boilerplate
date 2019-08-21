import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { environment } from '../environments/environment';
import { SampleMessageService } from 'src/app/shared/data-bus/shared-message-services/sample-message.service';
import { SharedMessageService } from 'src/app/shared/data-bus/shared-message-services/shared-message.service';
import { Router } from '@angular/router';
import { HttpStatusService } from './core/services/http-status/http-status.service';
import { NavigationInterceptorService } from './core/interceptors/navigation/navigation-interceptor.service';
import { AppIdleHandleService } from './core/services/app-idle-handle/app-idle-handle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  httpStatusSubscriber: any;
  title = 'tat-suite';
  env = environment;
  HTTPActivity = false;
  httStatusEventTimer = null;
  constructor(@Inject(UserIdleService) private userIdle,
              @Inject(SharedMessageService) private sharedMessageService,
              @Inject(Router) private router,
              @Inject(HttpStatusService) private httpStatus,
              @Inject(NavigationInterceptorService) private navigationInterceptor,
              @Inject(AppIdleHandleService) private appIdleHandleService ) {
              this.subscribeHttpStatus();
              this.navigationInterceptor.registerNavigationInterceptorEvent(this.router);
              this.appIdleHandleService.initIdleActivities(this.userIdle);
  }
  ngOnInit() {
    // this.sharedMessageService.createSubject('appComponentsubject');
    // this.sharedMessageService.createSubject('appComponentsubject2');
    // this.initIdleActivities();
  }
  ngOnDestroy() {
    this.unsubscribeHttpStatus();
  }
  subscribeHttpStatus() {
    this.httpStatusSubscriber = this.httpStatus.getHttpStatus().subscribe(
      (status: boolean) => {
          // console.log(status);
          this.clearHttStatusEventTimer();
          this.httStatusEventTimer = setTimeout(() => {
            this.HTTPActivity = status;
            console.log('HTTPActivity while routing -->', this.HTTPActivity);
          });
        }
    );
  }
  unsubscribeHttpStatus() {
    if (this.httpStatusSubscriber) {
        this.httpStatusSubscriber.unsubscribe();
    }
  }
  clearHttStatusEventTimer() {
    if (this.httStatusEventTimer) {
      clearTimeout(this.httStatusEventTimer);
    }
  }
  initIdleActivities() {
    this.sharedMessageService.getMessage('appComponentsubject').subscribe((data: any) => {
      console.log('Data Received', data);
   });
    this.sharedMessageService.getMessage('appComponentsubject2').subscribe((data: any) => {
    console.log('Data Received2', data);
 });
    // Start watching for user inactivity.
    this.userIdle.startWatching();
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {console.log('Time is up!');
                                              //  this.sharedMessageService.sendMessage('hiiii Time is up!', 'appComponentsubject');
                                              //  this.sharedMessageService.sendMessage('hiiii Time is up2!', 'appComponentsubject2');
  });
    this.userIdle.ping$.subscribe(() => console.log('PING'));

  }
  stop() {
    this.userIdle.stopTimer();
  }
  stopWatching() {
    this.userIdle.stopWatching();
  }
  startWatching() {
    this.userIdle.startWatching();
  }
  restart() {
    this.userIdle.resetTimer();
  }
}
