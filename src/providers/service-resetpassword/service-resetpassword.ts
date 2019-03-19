import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the ServiceResetpasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceResetpasswordProvider {

  public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/";
  recdata: any;
  loading: any;
 

  constructor(public http: HttpClient,public alertCtrl: AlertController,
    public toastCtrl: ToastController,public loadingCtrl:LoadingController) {
    console.log('Hello ServiceResetpasswordProvider Provider');
  }

  postData(url,data1){
    console.log(data1);

     // start wait  loading process 
  this.loading = this.loadingCtrl.create({
    content: 'sending OTP...',
  });
  this.loading.present();

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log("email",data);
        this.recdata = data;
        resolve(data);
  
      },error=>{
        this.loading.dismissAll();
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
