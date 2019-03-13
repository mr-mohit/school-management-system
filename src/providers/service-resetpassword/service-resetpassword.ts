import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the ServiceResetpasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceResetpasswordProvider {

  public URL="http://192.168.1.11/schoolapi/";
  recdata: any;
 

  constructor(public http: HttpClient,public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    console.log('Hello ServiceResetpasswordProvider Provider');
  }

  postData(url,data1){
    console.log(data1);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log(data);
        this.recdata = data;
        resolve(data);
  
      },error=>{
        console.log("Error in reset Process");
        alert("Error during the Reset password process");
      });
  });
  }

  postemail(data){
    console.log(data);
    var url=this.URL+"resetpassword.php";
    return this.postData(url,data);
  }
  // this is the method called to reset the password after getting the correct otp
  resetpassword(infos)
  {
     var url=this.URL+"resetpassword.php";
     return new Promise(resolve=>{
      console.log(infos);
      this.http.post(url,JSON.stringify(infos)).subscribe(data=>{
        //console.log(data);
        
        if(data['statuscode']==1)
        {
          //console.log(data);
          alert('Password changed successfully');
        }

        resolve(data);

      },error=>{
        console.log("Error during the insertion of the New password process");
        alert("Error during the insertion of the New password process");
      });
    });
  }

  showerrortoast(msg : any){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
