import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { ParentHomePage } from '../parent-home/parent-home';
import { StudentdashboardPage } from '../studentdashboard/studentdashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
private username;
private password;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public loadingCtrl: LoadingController) {
  }

  VaildateLogin(username,password)
  {
    if(this.username!=undefined && this.password!=undefined)
    {
      const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 800
    });
    loader.present();
    if(this.username=="Teacher")
    {
      this.navCtrl.setRoot(TeacherHomePage);
    }
   if(this.username=="Parent")
    {
      this.navCtrl.setRoot(ParentHomePage);
    }
   if(this.username=="Student")
   {
    this.navCtrl.setRoot(StudentdashboardPage);
   }  

    }
    else
    {
      const alert = this.alertCtrl.create({
        title: 'Please Enter Username/Password',
        //subTitle: 'Username/Password Dose Not Match',
        buttons: ['OK']
      });
      alert.present();
    }
    }

ResetPassword()
{
  this.navCtrl.push(ResetpasswordPage);
}
  
  
}


