import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceLoginProvider } from '../service-login/service-login';

/*
  Generated class for the ServiceAdminmessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceAdminmessageProvider {
  public URL=this.one.URL;

  public google_url = "https://fcm.googleapis.com/fcm/send"; // google for fcn
  public recdata : any;
  public fcndata: any =
  {
    "data" : {
      "title":"",
      "value":"",
    },
    "to" : ""
  };

  constructor(public http: HttpClient,public one:ServiceLoginProvider) {
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
    var url =this.URL+"SendMessage.php";

    //set title and description of message for push notification
    this.fcndata.data["title"] = data["messageTitle"];
    this.fcndata.data["value"] = data["messageDescription"];
    //this.getfcm(data["messageReceiver"]);

    console.log("Fcndata : ", this.fcndata);
    // this.postfcm(this.fcndata,this.google_url);
    return this.postData(data,url);
  }
  //this method is used to send the data to the google API for push notification
 postfcm(data,url)
 {
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(data)).subscribe(data=>{ 
     
       resolve(data);

    },error=>{
      alert("Connection Error");
      console.log(error);
    });
  });
 }

 // update the user fcm key after logged in with a phone. it will be used for push notification
 // while sending messages  
 updatefcm(userId,registration)
 {
      var data =
      { 
        "RegNo" : userId,
        "fcmKey" : registration
      };
     var url = this.URL + "updateFCMKey.php"
      this.postData(data,url);
 }
 //
  getfcm(userId)
  {
    var url = this.URL + "updateFCMKey.php"
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(userId)).subscribe(data=>{ 
       
        if(data['statuscode'] == 1)
        {
          this.fcndata.to = data["FCM_KEY"];
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

}
