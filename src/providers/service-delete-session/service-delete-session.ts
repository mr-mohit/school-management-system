import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceDeleteSessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteSessionProvider {

  public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";


  constructor(public http: HttpClient) {
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
          alert("Session Deleted");

        }
        else
        {
          alert("Session Not-Deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
