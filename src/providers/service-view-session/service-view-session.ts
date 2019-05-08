import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceViewSessionProvider {
  public URL=this.one.URL;
  public SessData:any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('ViewSessionProvider working');
  }

  postData(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.SessData=data['data'];
          console.log("service data",this.SessData);


        }
        else
        {
          alert("No sessions found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  getSessionFun()
  {
    var url=this.URL+"getSession.php";
    return this.postData(url);

  }

}
