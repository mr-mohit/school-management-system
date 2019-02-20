import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';

/*
  Generated class for the NewseviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewseviceProvider {

  public data:any;
  public URL="http://localhost/schoolapi/";
  public recdata: any;//this variable will store info coming from API
  public address:any;//for storing address
  public details:any;//for storing other details
 // public tempobj:{};
  public user_role:any;

  constructor(public http: HttpClient) {
    //console.log('Hello NewseviceProvider Provider');
  }

  postData(url,data1){
    //console.log(data1);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        //console.log(data);
        this.recdata=data;
        if(data['statuscode'] == 1)
         {
         //console.log("sucessfully implimented",data['statuscode']);
         this.address=this.recdata.adress[0];
         //console.log(typeof(this.address));
         this.details=this.recdata.data[0];

         //console.log("Address");
         //console.log(this.address);

         }
        resolve(data);
      },error=>{
        console.log("sorry,,error",error);
      });
    });
  }

  postlogin(data){
    console.log(data);
    var url=this.URL+"login.php";
    return this.postData(url,data);
  }

  

}
