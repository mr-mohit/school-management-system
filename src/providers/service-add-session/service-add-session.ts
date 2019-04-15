import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceAddSessionProvider {
  public URL=this.one.URL; //for local use
    // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  

 // public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  recdata: any;
  
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAddSessionProvider Provider');
  }




  postData(url,sessionData)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(sessionData)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          alert("Session Added");

        }
        else
        {
          alert("Session Not-Added");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  addSessionFun(sessionData)
  {
    var url=this.URL+"addSession.php";
    return this.postData(url,sessionData);

  }

}
