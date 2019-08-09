import { Component, OnInit, Inject } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { environment } from '../environments/environment';
import { SampleMessageService } from 'src/app/shared/data-bus/shared-message-services/sample-message.service';
import { SharedMessageService } from 'src/app/shared/data-bus/shared-message-services/shared-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tat-suite';
  env = environment;
  constructor(@Inject(UserIdleService) private userIdle,
              @Inject(SharedMessageService) private sharedMessageService) {
  }
  ngOnInit() {
    this.sharedMessageService.createSubject('appComponentsubject');
    this.sharedMessageService.createSubject('appComponentsubject2');
    this.initIdleActivities();
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
                                               this.sharedMessageService.sendMessage('hiiii Time is up!', 'appComponentsubject');
                                               this.sharedMessageService.sendMessage('hiiii Time is up2!', 'appComponentsubject2');
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
