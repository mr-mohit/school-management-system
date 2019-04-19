import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceAddEventProvider {
 // public URL="http://localhost/schoolapi/"; //for local use
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAddEventProvider Provider');
  }

  addEventFun(eventData)
  {
    var url=this.URL+"addEvent.php";
    return this.postEvent(url,eventData);
  }

  postEvent(url,eventData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(eventData)).subscribe(data=>{
        //console.log("passing data",eventData);
        if(data['statuscode']==1)
        {
          alert("Event Added");
        }
        else
        {
          alert("Unable to add event");
        }        
         resolve(data);
      },error=>{
        console.log("Error",error);
      });
    });
  }
}