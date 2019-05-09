import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceStudentMessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceStudentMessageProvider {

 

  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use
  data: any;


  constructor(public http: HttpClient) {
    console.log('Hello ServiceStudentMessageProvider Provider');
  }

  postData(usr,url){
  

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(usr)).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
          this.data=data['data']; 
          console.log(this.data); 
          //return this.data;
        
         }
         else
         {
           //console.log("Worng")
           alert(data["message"]);
         }
         resolve(data);

      },error=>{
        alert("Connection error");
      });
    });
  }


  getData(usr){
    var url=this.URL+"StudentMessageData.php";
    return this.postData(usr,url);
  }



}
