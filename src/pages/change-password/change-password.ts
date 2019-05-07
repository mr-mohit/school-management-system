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


  //For Current Password
  CurrentpasswordType:string='password';
  CurrentpasswordShown:boolean=false;

  //For New Password
  NewpasswordType:string='password';
  NewpasswordShown:boolean=false;

  //For Confirm Password
  ConfirmpasswordType:string='password';
  ConfirmpasswordShown:boolean=false;
  public status:boolean;

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
    if(this.CurrentPassword!=undefined && this.NewPassword!=undefined && this.ConfirmPassword!=undefined && this.status==true)
    {
      if(this.NewPassword==this.ConfirmPassword)
      {
        this.Data['REG_NO']=this.getuserid.recdata.data[0].REG_NO;;
        this.Data['PASSWORD']=this.CurrentPassword;
        this.Data['NEWPASSWORD']=this.ConfirmPassword;
        if(this.ChangeService.postChangeData(this.Data))
        {
          this.navCtrl.pop();
         // this.navCtrl.setRoot(LoginPage);
      
        }
      }
      else
      {
        alert("Password do not match");
      }
    }
    else
    {
       
       if(this.status==false)
       {
        alert("Password Should Include\nAtleast One Uppercase and One Lower Character\nOne Number and Special Character\nMinimum length: 8\n Maximum length : 10 Example: Abba@123");
     }
       else
       {
        alert("Please fill all the fields");
       }
    }
  }


toggleCurrentPassword()
{
  console.log("toggleCurrentPassword");
  if(this.CurrentpasswordShown)
  {
    this.CurrentpasswordShown=false;
    this.CurrentpasswordType='password';
  }
  else
  {
    this.CurrentpasswordShown=true;
    this.CurrentpasswordType='text';

  }

}

toggleNewPassword()
{
  console.log("toggleNewPassword");
  if(this.NewpasswordShown)
  {
    this.NewpasswordShown=false;
    this.NewpasswordType='password';
  }
  else
  {
    this.NewpasswordShown=true;
    this.NewpasswordType='text';

  }

}

toggleConfirmPassword()
{

  console.log("toggleConfirmPassword");
  if(this.ConfirmpasswordShown)
  {
    this.ConfirmpasswordShown=false;
    this.ConfirmpasswordType='password';
  }
  else
  {
    this.ConfirmpasswordShown=true;
    this.ConfirmpasswordType='text';

  }
}

//Pattern Check
check(event:any)
  {
    let newValue = event.target.value;

    let regExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,10}$');
 
    if(regExp.test(newValue))
    {
      this.status=true;
    }
    else
    {
     alert("Password Should Include\nAtleast One Uppercase and One Lower Character\nOne Number and Special Character\nMinimum length: 8\n Maximum length : 10 Example: Abba@123");
     this.status=false;
     //  console.log(regExp.test(newValue));
    }

  }
}
