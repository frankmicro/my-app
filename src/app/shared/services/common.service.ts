import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from  '@angular/router';

//npm i rxjs-compat
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(
        private router: Router
    ) {
        
    }

    //variable emitter
    subjectActivated$ = new Subject();

    // Observable string sources event emitter
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(event: any) {
        this.emitChangeSource.next(event);
    }
}