import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

@Injectable()
export class ServiceDeleteUserProvider {

  public URL=this.one.URL;
  recdata: any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
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
        alert("Unable to delete the user");
      });
    });
  }

  postUserID(data){
    console.log(data);
    var url=this.URL+"deleteUser.php";
    return this.postData(url,data);
  }

}
