import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUpdateProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
  
  }
  // THESE FUNCTION ARE USED IN UPDATING CLASS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  updateClassFun(classData)
  {
    var url=this.URL+"updateClass.php";
    return this.postClass(url,classData);
  }

  postClass(url,classData)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(classData)).subscribe(data=>{
        console.log("passing data",classData);
        if(data['statuscode']==1)
        {
          alert("Updated");

        }
        else
        {
          alert("Not-Updated");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }


  updateSessionFun(sessionData)
  {
    var url=this.URL+"updateSession.php";
    return this.postClass(url,sessionData);
  }
  // THESE FUNCTION ARE USED IN UPDATING SESSION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  updateSession(url,sessionData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(sessionData)).subscribe(data=>{
        console.log("passing data",sessionData);
        if(data['statuscode']==1)
        {
          alert("Updated");

        }
        else
        {
          alert("Not-Updated");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

// THESE FUNCTION ARE USED IN UPDATING TERM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  updateTermFun(termData)
  {
    var url=this.URL+"updateTerm.php";
    return this.postClass(url,termData);
  }


  updateTerm(url,termData)
  {
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(termData)).subscribe(data=>{
        console.log("passing data",termData);
        if(data['statuscode']==1)
        {
          alert("Updated");

        }
        else
        {
          alert("Not-Updated");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
