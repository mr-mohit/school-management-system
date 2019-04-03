import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { StudentdashboardPage } from '../studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../teacherdashboard/teacherdashboard';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { NativeStorage } from '@ionic-native/native-storage';
import { AdminHomePage } from '../admin-home/admin-home';
import { HomePage } from '../home/home';
import { ResultPage } from '../result/result';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 passwordType:string='password';  
 passwordShown:boolean=false;

private status:boolean;
public dataitem:any;
public user:any=
{
  "REG_NO":"",
  "PASSWORD":" "
};
  constructor(private nativeStorage: NativeStorage,public Menu: MenuController,public navCtrl: NavController,public alertCtrl:AlertController,public loadingCtrl: LoadingController,
    public service:ServiceLoginProvider,public toast:ToastController) {
      this.Menu.enable(false);
  }
  
  ValidateLogin(REG_NO,PASSWORD)
  {
    if(REG_NO!=undefined && PASSWORD!=undefined &&this.status!=false || this.status!=undefined)
    {
        this.user['REG_NO']=REG_NO;//get user name from login.html
        this.user['PASSWORD']=PASSWORD;//get password entered by user from login.html
        
        //calling services for login and sending data to API
        this.service.postlogin(this.user).then(data=>{

          this.dataitem = data; //getting response value from API
         console.log("response",data);

           //Showing Loading

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        dismissOnPageChange:true,
      });
      loader.present();

         if(data['statuscode'] === 1)
         {

          //Saving Registration Number and Password
          this.nativeStorage.setItem('LoginInfo', {RegistrationId: REG_NO, Password: PASSWORD, role: this.dataitem.data[0].ROLE})
          .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );

           //console.log("login sucessfully implimented");
           if(this.dataitem.data[0].ROLE=='student'|| this.dataitem.data[0].ROLE=='Student' || this.dataitem.data[0].ROLE=='STUDENT')
           {
            //console.log("student");
            this.navCtrl.setRoot(StudentdashboardPage);
             //this.navCtrl.setRoot('StudentdashboardPage');//calling student dashboard
           }
           else if(this.dataitem.data[0].ROLE=='teacher'|| this.dataitem.data[0].ROLE=='Teacher' || this.dataitem.data[0].ROLE=='TEACHER')
           {
            //console.log("teacher");
            this.navCtrl.setRoot(TeacherdashboardPage);
            //this.navCtrl.setRoot('TeacherdashboardPage');//calling teacher dashboardpage
           }
           else if(this.dataitem.data[0].ROLE=='admin'|| this.dataitem.data[0].ROLE=='Admin' || this.dataitem.data[0].ROLE=='ADMIN')
           {
             //sending to Admin Page
             this.navCtrl.setRoot(AdminDashboardPage);
           }
         }
         else
         {
              loader.dismiss();
         }
});  //calling service function end
}

else
{
  alert("Cannot be empty");
}

  
}

   


ResetPassword()
{
  this.navCtrl.push(ResetpasswordPage);
}

//Pattern Check
REG_NOCHECK(event:any)
{
  let newValue=event.target.value;
  let regExp= RegExp('[0-9]+$');
  if(regExp.test(newValue))
  {
    this.status=true;
  }
  else
  {
  const toast = this.toast.create({
    message: 'Characters/Symbols/Space are not allowed',
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
   this.status=false;

}
ts()
{
  this.navCtrl.push(ResultPage);
  // this.navCtrl.push(AttendenceInfoPage);
  //this.navCtrl.push(AddTimetablePage);
}

Admin()
{
  this.navCtrl.push(AdminHomePage);
}
Student()
{
  this.navCtrl.push(HomePage);
}


togglePassword()
{
  console.log("Toggle");
  if(this.passwordShown)
  {
    this.passwordShown=false;
    this.passwordType='password';
  }
  else
  {
    this.passwordShown=true;
    this.passwordType='text';

  }
}

}

