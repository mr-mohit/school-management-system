import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceDeleteTermProvider {
  public URL=this.one.URL;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceDeleteTermProvider Provider');
  }

  deleteTermFun(TD)
  {
    var url=this.URL+"deleteTerm.php";
    return this.deleteTerm(url,TD);

  }

  deleteTerm(url,TD)
  {
    //console.log("service call",classData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(TD)).subscribe(data=>{
        console.log("passing data",TD);
        if(data['statuscode']==1)
        {
          alert("Term Deleted");

        }
        else
        {
          alert("Term Not-Deleted");

        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

}
