import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAdminmessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdminmessageProvider {
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use


  google_url = "https://fcm.googleapis.com/fcm/send";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAdminmessageProvider Provider');
  }

}
