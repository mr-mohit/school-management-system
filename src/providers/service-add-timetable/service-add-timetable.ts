import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceAddTimetableProvider {
  
  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceAddTimetableProvider Provider');
  }

  addtimetableFun(timetableData)
  {
    var url=this.URL+"addTimetable.php";
    return this.postTimetable(url,timetableData);

  }

  postTimetable(url,timetableData)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(timetableData)).subscribe(data=>{
        console.log("passing data",timetableData);
        if(data['statuscode']==1)
        {
          alert("Timetable added");

        }
        else
        {
          alert("Unable to add timetable");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }
}
