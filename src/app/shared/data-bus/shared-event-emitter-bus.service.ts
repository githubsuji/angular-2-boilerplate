import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedEventEmitterBusService {

  sampleEmitter: EventEmitter<any> = new EventEmitter<any>();
}


/**
 * HOW TO USE THIS
 * ---------------
 * Step1: Inject the SharedEventEmitterBusService into the Component Where the Data has to Recieve
 * constructor( @Inject(SharedEventEmitterBusService) private sharedEventBus){}.
 *
 * Step2: Subscribe the required Emitter from the Component Where the Data has to Recieve
 *  this.sampleEmitterSubscription = this.sharedEventBus.sampleEmitter.subscribe((data: any) => {
 *    console.log('Data Received', data);
 *  });
 *
 * Step3: Unsubscribe this.sampleEmitterSubscription from ngOnDestroy()()
 * ngOnDestroy()(){
 *  if(this.sampleEmitterSubscription) this.sampleEmitterSubscription.unsubscribe();
 * }
 *
 * Step4: Inject the SharedEventEmitterBusService into the Component From which the Data has to Send
 * constructor( @Inject(SharedEventEmitterBusService) private sharedEventBus){}.
 *
 * Step5:  Emit the data to the required Emitter
 * this.sharedEventBus.sampleEmitter.emit('sample data');
 */
