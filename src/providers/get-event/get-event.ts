import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class GetEventProvider {
  public URL=this.one.URL;
  public Event:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
   
  }

  getEventsFun()
  {
  
    var url=this.URL+"getEvents.php";
    return this.getEvents(url);
  
  }
  getEvents(url)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify("")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          this.Event=data['data'];
          console.log("test data is",this.Event);
        }
        else
        {
          alert("no event fetched");
        }        
         resolve(data);
      },error=>{
        console.log("Error",error);
      });
    });
  }

}
