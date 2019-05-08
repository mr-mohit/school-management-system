import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceUploadAttendenceProvider {
  public URL=this.one.URL;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceUploadAttendenceProvider Provider');
  }

  uploadAttFun(Attendence)
  {
    console.log("Attendence going to punched",Attendence);
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
          alert("Attendance marked successfully");
          this.AMFun(Attendence);
          
        }
        else
        {
          alert("Unable to mark the attendance");
        }        
        
         resolve(data);
  
      },error=>{
        console.log("Error",error);
      });
    });
  
  }

  updateAttFun(Attendence)
  {
    console.log("Attendence going to Updated",Attendence);
    var url=this.URL+"updateAttendance.php";
    return this.updateAtt(url,Attendence);
  
  }
  updateAtt(url,Attendence)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(Attendence)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          console.log(data);
          alert("Attendance updated");
          
        }
        else
        {
          alert("Unable to update the attendance");
        }        
        
         resolve(data);
  
      },error=>{
        console.log("Error",error);
      });
    });
  
  }



  AMFun(details)
  {
    var url=this.URL+"AttendanceMaster.php";
    return this.AM(url,details);
  
  }
  AM(url,details)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(details)).subscribe(data=>{
        if(data['statuscode']==1)
        {
          console.log("AM sucessful");
          
        }
        else
        {
          console.log("AM error");
        }        
        
        //  resolve(data);
  
      });
    });
  
  }


  
}
