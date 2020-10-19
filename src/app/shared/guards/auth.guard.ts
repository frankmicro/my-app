import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _authService: AuthService, private _commonService : CommonService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this._authService.isLoggedIn()) {
        this._commonService.subjectActivated$.next(false);
        this._authService.authCheck('/login');
      }
      this._commonService.subjectActivated$.next(true);
      return this._authService.isLoggedIn();
  }
}