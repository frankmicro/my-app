import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncrDecrService {

  constructor() { }
 
  //The set method is use for encrypt the value.
  set(keys, value){
    const encrypted = crypto.AES.encrypt(JSON.stringify(value), keys).toString();
    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  get(keys, value){
    const decrypted = crypto.AES.decrypt(value, keys).toString(crypto.enc.Utf8).replace("\"","");
    return decrypted;
  }
}
