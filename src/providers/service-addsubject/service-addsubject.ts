import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAddsubjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAddsubjectProvider {
 // public URL="http://localhost/schoolapi/"; //for local use
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
   //public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
    console.log("Hello ServiceAddsubjectProvider Provider");
  }

  postSubject(subject)
  {
    var url=this.URL+"addSubject.php";
    return this.postData(url,subject);
  }

  postData(url,data1)
  {
    console.log("passing data",data1);
    return new Promise(resolve=>{
    
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        if(data['statuscode'] == 1)
        {
          alert("Added successfully");
        }
        else
        {
          alert("Subject ID Exist/Unable To Add");
        }
        resolve(data);
      },error=>{
        console.log(data1);
        console.log("data not transferred",error);
      });
    });
  }

}
