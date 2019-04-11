import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { attachEmbeddedView } from '@angular/core/src/view';

/*
  Generated class for the ServiceUploadAttendenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceUploadAttendenceProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient) {
    console.log('Hello ServiceUploadAttendenceProvider Provider');
  }

  uploadAttFun(Attendence)
  {
    console.log("Attendence going to punched",Attendence);
    // console.log("Details",Details);
    var url=this.URL+"uploadAttendence.php";
    return this.getSDC(url,Attendence);
  
  }
  getSDC(url,Attendence)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(Attendence)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          console.log(data);
          alert("Attendance Marked");
          
        }
        else
        {
          alert("Unable to mark Attendance");
        }        
        
         resolve(data);
  
      },error=>{
        console.log("Error",error);
      });
    });
  
  }
  
}
