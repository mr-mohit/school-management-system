import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceChangepasswordProvider } from '../../providers/service-changepassword/service-changepassword';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  private CurrentPassword:any;
  private NewPassword:any;
  private ConfirmPassword:any;

  private Data:any={
    "REG_NO":"",
    "PASSWORD":"",
    "NEWPASSWORD":""

  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public getuserid:ServiceLoginProvider,
    public ChangeService:ServiceChangepasswordProvider) {
  }
  
  ChangePassword()
  {
    if(this.CurrentPassword!=undefined && this.NewPassword!=undefined && this.ConfirmPassword!=undefined)
    {
      if(this.NewPassword==this.ConfirmPassword)
      {
        this.Data['REG_NO']=this.getuserid.recdata.data[0].REG_NO;;
        this.Data['PASSWORD']=this.CurrentPassword;
        this.Data['NEWPASSWORD']=this.ConfirmPassword;
        this.ChangeService.postChangeData(this.Data);

      }
      else
      {
        alert("Password do not match");
      }
    }
    else
    {
       alert("Please fill all the fields");
    }
  }

}
