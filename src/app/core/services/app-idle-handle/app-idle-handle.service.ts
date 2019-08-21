import { Injectable } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';

@Injectable({
  providedIn: 'root'
})
export class AppIdleHandleService {

  userIdle: any;
  constructor() { }

  initIdleActivities(userIdle: UserIdleService) {
    this.userIdle = userIdle;
    // Start watching for user inactivity.
    this.userIdle.startWatching();
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      console.log('Time is up!');

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
