import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceSyllabusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceSyllabusProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceSyllabusProvider Provider');
  }

}
