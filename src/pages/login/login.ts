import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { ResetpasswordPage } from '../resetpassword/resetpassword';

import { StudentdashboardPage } from '../studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../teacherdashboard/teacherdashboard';
import { NewseviceProvider } from '../../providers/newsevice/newsevice';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
private username:any;
private password:any;
public dataitem:any;
public user:any=
{
  "username":"",
  "password":" "
};
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public loadingCtrl: LoadingController,
    public service:NewseviceProvider) {
  }
io
  VaildateLogin(username,password)
  {
  

        this.user['username']=this.username;//get user name from login.html
        this.user['password']=this.password;//get password entered by user from login.html
        
        //calling services for login and sending data to API
        this.service.postlogin(this.user).then(data=>{

          this.dataitem = data; //getting response value from API
         console.log("response",data);

         if(data['statuscode'] == 1)
         {
           //console.log("login sucessfully implimented");
           if(this.dataitem.data[0].ROLE=='student')
           {
            //console.log("student");
            this.navCtrl.setRoot(StudentdashboardPage);
             //this.navCtrl.setRoot('StudentdashboardPage');//calling student dashboard
           }
           else if(this.dataitem.data[0].ROLE=='teacher')
           {
            //console.log("teacher");
            this.navCtrl.setRoot(TeacherdashboardPage);
            //this.navCtrl.setRoot('TeacherdashboardPage');//calling teacher dashboardpage
           }
          
         }
         else
         {
           alert("Invalid User");
         }
})  //calling service function end
}

ResetPassword()
{
  this.navCtrl.push(ResetpasswordPage);
}
  
  
}


