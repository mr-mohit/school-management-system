import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceUpdateUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceUpdateUserProvider {

  public URL=this.one.URL; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  recdata: any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    console.log('Hello ServiceUpdateUserProvider Provider');
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
        console.log("error in updation process");
        alert("error in updation process");
      });
    });
  }

  postuser(data){
    console.log(data);
    var url=this.URL+"updateUser.php";
    return this.postData(url,data);
  }

}
