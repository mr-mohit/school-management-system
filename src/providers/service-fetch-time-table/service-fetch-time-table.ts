import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceFetchTimeTableProvider {

  //public URL="http://localhost/schoolapi/"; 
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use

  public StudentTime:any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceFetchTimeTableProvider Provider');
  }

  //Show Starts Here

  postData(url,Data){
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(Data)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            this.StudentTime=data['data'];
            console.log(this.StudentTime);
         }else
         {  
          this.StudentTime=[{ID: "NA", CLASS_MASTER_ID: "NA", SUBJECT_ID: "NA", TIME_SLOT: "NA", DAY: "NA"}];
          alert("No Class Today");
         }
         resolve(data);

      },error=>{
        console.log("error in deletion process");
        alert("error in Service");
      });
    });
  }

  post(Data){
    var url=this.URL+"StudentTimeTable.php";
    return this.postData(url,Data);
  }

}
