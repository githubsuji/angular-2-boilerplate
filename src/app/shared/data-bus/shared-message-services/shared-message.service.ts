import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SharedMessageService {
 static subjectMap = new Map<string, Subject<any>>();
  static displaySubjectMapInfo() {
    console.log('SharedMessageService Subjects Length :', SharedMessageService.subjectMap.size);
    for (const keys in SharedMessageService.subjectMap) {
      if (SharedMessageService.subjectMap.hasOwnProperty(keys)) {
        console.log(keys);
    }
     }
  }

  createSubject(subjectIdentifier: string) {
    if (!SharedMessageService.subjectMap.hasOwnProperty(subjectIdentifier)) {
      SharedMessageService.subjectMap.set(subjectIdentifier, new Subject<any>());
    }
  }
  sendMessage(message: any, subjectIdentifier: string) {
    console.log(subjectIdentifier, '############################', message);
    console.log('sssssss1');
    SharedMessageService.subjectMap.get(subjectIdentifier).next({ data: message });

  }
  clearMessages(subjectIdentifier: string) {
    try {
      SharedMessageService.subjectMap.get(subjectIdentifier).next();
    } catch (e) {

    }
}

  getMessage(subjectIdentifier: string): Observable<any> {
    return SharedMessageService.subjectMap.get(subjectIdentifier).asObservable();
  }
}
