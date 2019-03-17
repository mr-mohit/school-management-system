import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { ServiceResetpasswordProvider } from '../../providers/service-resetpassword/service-resetpassword';
import { Resetpassword2Page } from '../resetpassword2/resetpassword2';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

  otp : any ; // otp used to reset the password
  email : any; // email address of the user who want to reset his password
  regNo : any; // registration number of the user 
  recdata: any;
  loading :Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController, public loadingCtrl : LoadingController,
     public service : ServiceResetpasswordProvider) {
  }

 // reset password
 reset(){
  this.otp=Math.floor(100000 + Math.random() * 900000000);
  let userinfos={
    regNo: this.regNo, 
    email: this.email,
    otp: this.otp,
    process:'1'
  } // these infos are used to check if the user exists in the system and also to send him the otp

  // start wait  loading process 
  this.loading = this.loadingCtrl.create({
    content: 'sending OTP...',
  });
  this.loading.present();

 // send user infos to the server 
  this.service.postemail((userinfos)).then((data:any)=>{
     console.log(this.otp);
     console.log(" final response data",data);
     this.recdata=data;
     if(data['statuscode']==1)
     {
          this.loading.dismissAll(); // stop the loading process
        
        //alert box
       const alert = this.alertCtrl.create({
        title: 'hello'+' '+this.recdata.data[0].USER_NAME, 
        subTitle: 'The otp has been sent to your email',
        message: 'Click Ok -> to set the new password',
        buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            handler: (blah) => {
            }
        },
        {
           text: 'Ok',
           handler: abc => {

             this.navCtrl.push(Resetpassword2Page);
         }
        }]
      });
     alert.present();
     }
     else{
      this.loading.dismissAll(); // stop the loading process
      alert(data['msg']);
     }
   
  })

}
  

}
