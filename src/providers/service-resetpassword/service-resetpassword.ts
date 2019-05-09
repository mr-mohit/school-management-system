import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ServiceLoginProvider } from '../service-login/service-login';


@Injectable()
export class ServiceResetpasswordProvider {

 
  public URL=this.one.URL;
  recdata: any;
  loading: any;
  chk : any = 0;
 

  constructor(public http: HttpClient,public alertCtrl: AlertController,
    public toastCtrl: ToastController,public loadingCtrl:LoadingController,public one:ServiceLoginProvider) {
    console.log('Hello ServiceResetpasswordProvider Provider');
  }

  postData(url,data1){
    console.log(data1);

     // start wait  loading process 
  this.loading = this.loadingCtrl.create({
    content: 'Sending OTP',
    dismissOnPageChange:true,
    duration:1000000
  });
  this.loading.present();

    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(data1)).subscribe(data=>{
        console.log("email",data);
        this.recdata = data;
        // if(data['statuscode']==1)
        // {
        //       // start wait  loading process 
        //       this.loading = this.loadingCtrl.create({
        //         content: 'Sending OTP...',
        //         dismissOnPageChange:true,
        //         duration:1000000
        //       });
        //       this.loading.present();

        //       this.chk = 1;
        // }
        resolve(data);
  
      },error=>{
        this.loading.dismissAll();
        console.log("Error in reset Process");
        alert("Error occured while resetting the password");
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
        console.log("Error occured while inserting the New Password");
        alert("Error occured while inserting the New Password");
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
