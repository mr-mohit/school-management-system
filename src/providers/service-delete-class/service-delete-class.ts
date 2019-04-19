import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceDeleteClassProvider {
   //public URL="http://localhost/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";


  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteClassProvider Provider');
  }

  deleteClassFun(CD)
  {
    var url=this.URL+"deleteClass.php";
    return this.deleteClass(url,CD);

  }

  deleteClass(url,CD)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(CD)).subscribe(data=>{
        console.log("passing data",CD);
        if(data['statuscode']==1)
        {
          alert("Class Deleted");

        }
        else
        {
          alert("Class Not-Deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
