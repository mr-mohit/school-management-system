import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceAddEventProvider {

  public URL=this.one.URL;

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
          alert("Event added");
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