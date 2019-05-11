import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceAdduserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdduserProvider {

  public data:any;
  public URL=this.one.URL;
  public userID = "";
  public class = []; // used to get class infos 
 

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
    //console.log('Hello ServiceLoginProvider Provider');
  }
  getData(url,data1){
    
  }

  postlogin(data){
    console.log(data);
    var url=this.URL+"adduser.php";
    return this.getData(url,data);
  }


  postData(url,data1){
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
        if(data['statuscode'] == 1)
         {
            alert("User added successfully")
         }else
         {  
           alert(data['msg']);
         }
         resolve(data);

      },error=>{
        console.log("error in insertion process");
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
               this.class = data['class'];
              
            }else
            {  
              alert("Unable to retrieve the User ID");
            }
            resolve(data);
   
         },error=>{
           console.log("error in get User ID process");
         });
       });
 }

 // upload image to the server
 

}
