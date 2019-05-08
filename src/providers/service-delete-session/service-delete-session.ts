import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceDeleteSessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteSessionProvider {

  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteSessionProvider Provider');
  }

  deleteSessionFun(SD)
  {
    var url=this.URL+"deleteSession.php";
    return this.deleteSession(url,SD);

  }

  deleteSession(url,SD)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(SD)).subscribe(data=>{
        console.log("passing data",SD);
        if(data['statuscode']==1)
        {
          alert("Session deleted");

        }
        else
        {
          alert("Session not deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
