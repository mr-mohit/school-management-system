import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceUpdateProvider {
  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
  
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
          alert("Class updated");

        }
        else
        {
          alert("Class not updated");

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
          alert("Session updated");

        }
        else
        {
          alert("Session not updated");

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
          alert("Term updated");

        }
        else
        {
          alert("Term not updated");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

// THESE FUNCTION ARE USED IN UPDATING TERM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
uSubject(updateSub)
{
  var url=this.URL+"updateSubject.php";
  return this.updateSubject(url,updateSub);
}


updateSubject(url,updateSub)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(updateSub)).subscribe(data=>{
      console.log("passing data",updateSub);
      if(data['statuscode']==1)
      {
        alert("Subject updated");

      }
      else
      {
        alert("Subject not updated");

      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}

}
