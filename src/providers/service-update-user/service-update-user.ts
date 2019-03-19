import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceUpdateUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceUpdateUserProvider {

  public URL="http://localhost/schoolapi/";
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  recdata: any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceUpdateUserProvider Provider');
  }

}
