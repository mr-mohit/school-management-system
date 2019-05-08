import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceDeleteClassProvider {
  public URL=this.one.URL;
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
          alert("Class deleted");

        }
        else
        {
          alert("Class not deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
