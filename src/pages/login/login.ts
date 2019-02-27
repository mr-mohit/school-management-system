import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { StudentdashboardPage } from '../studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../teacherdashboard/teacherdashboard';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';

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
  constructor(public Menu: MenuController,public navCtrl: NavController,public alertCtrl:AlertController,public loadingCtrl: LoadingController,
    public service:ServiceLoginProvider) {
      this.Menu.enable(false);
  }
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
           if(this.dataitem.data[0].ROLE=='student'|| this.dataitem.data[0].ROLE=='Student')
           {
            //console.log("student");
            this.navCtrl.setRoot(StudentdashboardPage);
             //this.navCtrl.setRoot('StudentdashboardPage');//calling student dashboard
           }
           else if(this.dataitem.data[0].ROLE=='teacher'|| this.dataitem.data[0].ROLE=='Teacher')
           {
            //console.log("teacher");
            this.navCtrl.setRoot(TeacherdashboardPage);
            //this.navCtrl.setRoot('TeacherdashboardPage');//calling teacher dashboardpage
           }
           else if(this.dataitem.data[0].ROLE=='admin'|| this.dataitem.data[0].ROLE=='Admin')
           {
             //sending to Admin Page
             this.navCtrl.setRoot(AdminDashboardPage);
           }
         }
         else
         {
           //showing alert in case of wrong password and user 
          const alert = this.alertCtrl.create({
            title: 'Invaild User!',
            buttons: ['OK']
          });
          alert.present();
         }
})  //calling service function end
}

   


ResetPassword()
{
  this.navCtrl.push(ResetpasswordPage);
}
  
  
}


