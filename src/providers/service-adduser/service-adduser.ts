import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAdduserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdduserProvider {

  public data:any;
  public URL="http://172.26.17.114/schoolapi/"; //for local use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public userID = "";
 

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAdduserProvider Provider');
  }


  postData(url,data1){
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            alert("Insertion succesfull")
         }else
         {  
           alert("Insertion failed");
         }
         resolve(data);

      },error=>{
        console.log("error in insertion process");
        alert("error in insertion process");
      });
    });
  }

  postuser(data){
    console.log(data);
    var url=this.URL+"add_user.php";
    return this.postData(url,data);
  }

 /// function used to get user id
 getID(role)
 {
       console.log(role);
       var url=this.URL+"getID.php";
       return new Promise(resolve=>{
         this.http.post(url,JSON.stringify(role)).subscribe(data=>{
           console.log(data);
           if(data['statuscode'] == 1)
            {
               this.userID = data['id'];
               console.log("servie user id : ", this.userID);
            }else
            {  
              alert("get User ID failed");
            }
            resolve(data);
   
         },error=>{
           console.log("error in get User ID process");
           alert("error in get user ID proces");
         });
       });
 }

 // upload image to the server
 

}
