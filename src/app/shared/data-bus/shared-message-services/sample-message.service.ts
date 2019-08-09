import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleMessageService {
// https://blog.angulartraining.com/rxjs-subjects-a-tutorial-4dcce0e9637f
  private subject = new Subject<any>();

  sendMessage(message: any) {
      console.log('############################', message);
      this.subject.next({ data: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}

/**
 * HOW TO USE THIS
 * ---------------
 * Step1: Inject the SampleMessageService into the Component Where the Data has to Recieve
 * constructor( @Inject(SampleMessageService) private sharedMessageService){}.
 *
 * Step2: Subscribe the required Emitter from the Component Where the Data has to Recieve
 *  this.sampleMessageSubscription = this.sharedMessageService.getMessage().subscribe((data: any) => {
 *    console.log('Data Received', data);
 *  });
 *
 * Step3: Unsubscribe this.sampleMessageSubscription from ngOnDestroy()()
 * ngOnDestroy()(){
 *  if(this.sampleMessageSubscription) this.sampleMessageSubscription.unsubscribe();
 * }
 *
 * Step4: Inject the SampleMessageService into the Component From which the Data has to Send
 * constructor( @Inject(SampleMessageService) private sharedMessageService){}.
 *
 * Step5:  Emit the data to the required Emitter
 * this.sharedMessageService.sendMessage('Message !');
 *
 * Step6: (Optional)
 * clear messages -       this.sharedMessageService.clearMessages();
 */
