import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  public setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  public getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}
