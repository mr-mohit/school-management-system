import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceGetResultProvider {

  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use

  constructor(public http: HttpClient) {
    console.log('Hello ServiceGetResultProvider Provider');
  }

}
