import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {EncrDecrService} from '../shared/services/encr-decr-service.service';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/services/auth.service';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {
        client_secret = "IXpwBOCNvcTVCB7opNWSUeoOeoOaw6LQ7RV6blda";
        constructor(
         private EncrDecr: EncrDecrService,
         private _authService: AuthService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._authService.isLoggedIn()) {
            const token: string =this.EncrDecr.get(this.client_secret, localStorage.getItem('ACCESS_TOKEN'));
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
        }

        if (!request.headers.has('Content-Type')) {
             request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        
        return next.handle(request).pipe(catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 400) {
                        Swal.fire('Oops...', err.error.message, 'error');
                        return throwError(err.message);
                    }

                    if (err.status === 404) {
                        Swal.fire('Oops...', err.error.message, 'error');
                        return throwError(err.message);
                    }

                    if (err.status === 500) {
                        Swal.fire('Oops...', err.error.message, 'error');
                        return throwError(err.message);
                    }
                }
            }));
    }

}

