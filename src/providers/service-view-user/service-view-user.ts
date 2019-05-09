import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';
@Injectable()
export class ServiceViewUserProvider {

  public data:any;
  public URL=this.one.URL;
  recdata: any;

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
  }

  postData(url,data1){
    console.log(data1);

    // Passing Header

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
                 
        if(data['statuscode'] == 1)
         {
            this.recdata=data; 
            console.log(this.recdata);
         }
         else
         {  
           alert("user ID does not exist");
         }
         resolve(data);

      },error=>{
        // console.log(" error : data not sent");
        // alert(" error : data not sent");
        console.log(error)
      });
    });
  }

  postUserID(data){
    console.log("data going :",data);
    var url=this.URL+"view_user.php";
    console.log("url : ", url );
    return this.postData(url,data);
  }

}
