import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  flag : boolean = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this._authService.authCheck('/dashboard');
    }

    this.loginForm = new FormGroup({  
      'password' : new FormControl(null,[Validators.required, Validators.minLength(5)]),
      'email' : new FormControl(null,[Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit = () => {
    if (this.loginForm.valid) {
      //this.loginFlag = true;
      let params = this.loginForm.value;
      this._authService.login(params).subscribe(res => {
        if (this._authService.isLoggedIn()) {
          //Swal.fire('Login successfully!', 'success');
          this._authService.authCheck('/dashboard');
        }
      });
    }
  }

  

}
