import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceLoginProvider {
  public data:any;
  // public URL="http://localhost/schoolapi/"; //for local use
  public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public recdata: any;//this variable will store info coming from API
  public address:any;//for storing address
  public details:any;//for storing other details
  public user_role:any; //this variable is used to define side menu as per user role


  constructor(public http: HttpClient) {
    //console.log('Hello ServiceLoginProvider Provider');
  }
  postData(url,data1){
    //console.log(data1);

    // Passing Header

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
        this.recdata=data;        
        if(data['statuscode'] == 1)
         {
          this.user_role=this.recdata.data[0].ROLE;//storing the role of user into the variable named user_role
          //console.log(this.user_role);
         //console.log("sucessfully implemented",data['statuscode']);
         this.address=this.recdata.address[0]; 
         //console.log(typeof(this.address));
         this.details=this.recdata.data[0];
         //console.log("Address");
         //console.log(this.address);
         }else
         {
           //console.log("Worng")
           alert("Invalid User Name or Password");
         }
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });
  }

  postlogin(data){
    console.log(data);
    var url=this.URL+"login.php";
    return this.postData(url,data);
  }

}
