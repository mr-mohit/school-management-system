import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUpdateProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  //public URL="https://direct-school.000webhostapp.com/"; //for hosting
  constructor(public http: HttpClient) {
    console.log('Hello ServiceUpdateProvider Provider');
  }

  uSubject(updateSubject)
  {
    var url=this.URL+"updateSubject.php";
    return this.postData(url,updateSubject);
  }

  postData(url,data1)
  {
    console.log("Passing data",data1);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        if(data['statuscode'] == 1)
        {
          console.log("coming data",data);
          alert("Updated successfully");
        }
        else
        {
          alert("Updation unsuccessful");
        }
        resolve(data);
      },error=>{
        console.log(data1);
        console.log("data not transferred",error);
      });
    });
  }

}
