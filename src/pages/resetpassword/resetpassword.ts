import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,public service : ServiceResetpasswordProvider) {
  }

 // reset password
 reset(){
  this.otp=Math.floor(10000000 + Math.random() * 90000000);
  let userinfos={
    regNo: this.regNo, 
    email: this.email,
    otp: this.otp,
    process:'1'
  } // these infos are used to check if the user exists in the system and also to send him the otp

 // send user infos to the server 
  this.service.postemail((userinfos)).then((data:any)=>{
     console.log(this.otp);
     console.log(" final response data",data);
     this.recdata=data;
     if(data['statuscode']==1)
     {
       const alert = this.alertCtrl.create({
        title: 'hello'+' '+this.recdata.data[0].USER_NAME, 
        subTitle: 'The otp that has been sent to your email',
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
          //  if(abc.otp==this.recdata.data[0].OTP && abc.pass!=null) // check if the otp entered is matching with stored one
          //  {
          //  // console.log("correct otp");
          //   let data2={
          //     regNo: this.recdata.data[0].USER_ID,
          //     newpassword: abc.pass,
          //     process:'2'
          //   } // set the new password
          //    this.service.resetpassword(data2).then((data:any)=>{

          //     if(data['statuscode']==1)
          //     {
          //       this.navCtrl.pop();
          //     }
      

          //    }); // call the correct method 
          //   // this.navCtrl.pop();
          // }
          // else{
          //   this.service.showerrortoast('otp is invalid');
          //   return false;
          // }
          
         }
        }]
      });
     alert.present();
     }
     else{
      
      alert(data['msg']);
     }
   
  })

}
  

}
