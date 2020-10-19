import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _commonService : CommonService
  ) { }

  ngOnInit() {
    this._authService.clearStorage();

    if (this._authService.isLoggedIn()) {
      this._commonService.subjectActivated$.next(true);
      this._authService.authCheck('/dashboard');
    } else {
      this._commonService.subjectActivated$.next(false);
      this._authService.authCheck('/login');
    }
  }

}
