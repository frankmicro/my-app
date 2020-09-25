import { Injectable } from '@angular/core';
import { Endpoints } from '../app.constant';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {EncrDecrService} from './encr-decr-service.service';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseAppUrl = environment.URL;
  client_secret = "IXpwBOCNvcTVCB7opNWSUeoOeoOaw6LQ7RV6blda";

  constructor(
    private http: HttpClient,
    private EncrDecr: EncrDecrService,
    private router: Router
  ) { }

  /**
   * @params serviceName indicates service endpoint;
   * @params postBody indicates paramss to post
   * @params options indicates option to pass like headers and etc.
   */
  post(serviceName, postBody: any, options?: any) {
    let url = this.BaseAppUrl + serviceName;
    if (options) {
      return this.http.post(url, postBody, options)
        .pipe(map(res => {
          return this.handleResponse(res);
        }))
    } else {
      return this.http.post(url, postBody)
        .pipe(map(res => {
          return this.handleResponse(res);
        }))
    }
  }

  /**
   * @params serviceName indicates service endpoint;
   */
  get(serviceName) {
    let url = this.BaseAppUrl + serviceName;

    return this.http.get(url).pipe(map(res => {
      return this.handleResponse(res);
    }))
  }

  /**
   * @params res data to check error and pass refresh token;
   */
  handleResponse(res) {
    if (res.success) {
      
      if (res.hasOwnProperty('data')) {
        
        if (res.data != null && res.data.hasOwnProperty('token') && res.data.hasOwnProperty('user')) {
            localStorage.setItem('ACCESS_TOKEN',this.EncrDecr.set(this.client_secret,res.data['token']));
            localStorage.setItem('USER',this.EncrDecr.set(this.client_secret,res.data['user']));
        }
      }
    }
    return res;
  }

  login = (params: any) => {
    return this.post(Endpoints.signIn, params);
  }

  test = () => {
    return this.get(Endpoints.systemCheck);
  }

  isLoggedIn = () => {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  authCheck = (location : string) => {
    this.router.navigateByUrl(location);
  }

  clearStorage = () => {
    localStorage.clear();
  }

}
