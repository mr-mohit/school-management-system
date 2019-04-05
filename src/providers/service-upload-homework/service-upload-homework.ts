import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceUploadHomeworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceUploadHomeworkProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting

  constructor(public http: HttpClient) {
    console.log('Hello ServiceUploadHomeworkProvider Provider');
  }

// post data to API

postData(url,data1){
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
      console.log(data);
      if(data['statuscode'] == 1)
       {
          alert(data['msg']);
       }else
       {  
        alert(data['msg']);
       }
       resolve(data);

    },error=>{
      console.log("error in updation process");
      alert("error in updation process");
    });
  });
}

  postHomework(data){
    console.log(data);
    var url=this.URL+"uploadHomework.php";
    return this.postData(url,data);
  }
}
