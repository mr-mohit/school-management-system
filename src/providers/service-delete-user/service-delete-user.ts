import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceDeleteUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDeleteUserProvider {

  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  recdata: any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceDeleteUserProvider Provider');
  }

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
        console.log("error in deletion process");
        alert("error in deletion process");
      });
    });
  }

  postUserID(data){
    console.log(data);
    var url=this.URL+"deleteUser.php";
    return this.postData(url,data);
  }

}
