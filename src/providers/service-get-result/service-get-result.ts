import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceGetResultProvider {
  public URL=this.one.URL; //for local use
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceGetResultProvider Provider');
  }

}
