import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceAdminmessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdminmessageProvider {
  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for server use


  public google_url = "https://fcm.googleapis.com/fcm/send";
  public recdata: any;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAdminmessageProvider Provider');
  }

  postData(data1,url){
  
            console.log(data1);     

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{ 
        //console.log(data);     
        if(data['statuscode'] == 1)
         {
           alert(data['msg']);
         }
         else
         {
           //console.log("Worng")
           alert(data['msg']);
         }
         resolve(data);

      },error=>{
        alert("Connection Error");
        console.log(error);
      });
    });
  }


  postMsg(data){
    var url=this.URL+"SendMessage.php";
    return this.postData(data,url);
  }


}
