import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceAddsubjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAddsubjectProvider {
  public URL=this.one.URL;
  public subject:any;
  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log("Hello ServiceAddsubjectProvider Provider");
  }

  postSyllFun(reg)
  {
    var url=this.URL+"Syllabus.php";
    return this.postData(url,reg);
  }

  postSyll(url,data1)
  {
    // console.log("passing data",data1);
    return new Promise(resolve=>{
    
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        if(data['statuscode'] == 1)
        {
          this.subject=data1['data'];
          console.log("Subject Getting",this.subject);
        }
        else
        {
          console.log("No-Subject Found");
        }
        resolve(data);
      },error=>{
        console.log(data1);
        console.log("data not transferred",error);
      });
    });
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
          alert("Subject added successfully");
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
