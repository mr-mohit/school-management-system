import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceViewSessionProvider {
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public SessData:any;

  constructor(public http: HttpClient) {
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
          alert("no data fetched");
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
