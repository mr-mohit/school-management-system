import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SchoolInfoPage } from '../pages/school-info/school-info';
import { ViewEventsPage } from '../pages/view-events/view-events';
import { StudentQuizPage } from '../pages/student-quiz/student-quiz';
import { GalleryPage } from '../pages/gallery/gallery';
import { StudentFeedbackPage } from '../pages/student-feedback/student-feedback';
import { TeacherFeedbackPage } from '../pages/teacher-feedback/teacher-feedback';
import { TeacherSendMessagePage } from '../pages/teacher-send-message/teacher-send-message';
import { TeacherAnnouncementPage } from '../pages/teacher-announcement/teacher-announcement';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SettingPage } from '../pages/setting/setting';
import { ServiceLoginProvider } from '../providers/service-login/service-login';
import { ServiceAddsubjectProvider} from '../providers/service-addsubject/service-addsubject';

import { StudentdashboardPage } from '../pages/studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../pages/teacherdashboard/teacherdashboard';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { AddUsersPage } from '../pages/add-users/add-users';


import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any ;
    toast:any;
    public userId:any;
    public pass:any;
    public type:any;
    //declaration of array for side menu
    Student_a:Array<{title:string, icon:string,component:any,}>;    //array for student
    Teacher_a:Array<{title:string, icon:string,component:any,}>;    //array for teacher
    help:Array<{title:string, icon:string,component:any,}>;

  constructor(platform: Platform, statusBar: StatusBar,private nativeStorage: NativeStorage,public toastCtrl: ToastController,
             public service:ServiceLoginProvider, splashScreen: SplashScreen,public altertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackOpaque();
      splashScreen.hide();

      this.nativeStorage.getItem('LoginInfo')
  .then(
    data => {this.userId= data.RegistrationId;
            this.pass=data.PASSWORD;
            this.type=data.role;

            if(this.userId!=undefined){
              if(this.type.toLowerCase()==='admin'){
                  this.rootPage=AdminDashboardPage;
                  console.log(this.userId+' '+this.pass);
              }else if(this.type.toLowerCase()==='student'){
                  this.rootPage=StudentdashboardPage;
              }else if(this.type.toLowerCase()==='teacher'){
                  this.rootPage=TeacherdashboardPage;
              }
            }else{
              this.rootPage=LoginPage;
           }
          },
    error => {console.error(error);
              this.rootPage=LoginPage}
  );

  //Check if Internet is not connected
  window.addEventListener('offline', () => {
    //Do task when no internet connection
    this.showToast('No Internet connection',0,false);
    },false);

    //Check if Internet is Connected
    window.addEventListener('online', () => {
      this.toast.dismiss();
      this.showToast('Internet Connection Successfull',4000,true);
      
      },false);

});
    
    //initializing the student array elements for side menu
    this.Student_a=[
      {title:'Home', icon:'home', component:StudentdashboardPage},
      {title:'School Info', icon:'contact', component:SchoolInfoPage},
      {title:'Events', icon:'contact',component:ViewEventsPage},
      {title:'Feedback', icon:'contact',component:StudentFeedbackPage},
      {title:'Quiz', icon:'contact', component:StudentQuizPage},
      {title:'Gallery',icon:'contact',component:GalleryPage}
    ];

    //initializing the teacher array elements for side menu
    this.Teacher_a=[
      {title:'Home', icon:'home',component:TeacherdashboardPage},
      {title:'Send Messages', icon:'contact',component:TeacherSendMessagePage},
      {title:'Set Announcement',icon:'contact',component:TeacherAnnouncementPage},
      {title:'Feedback',icon:'contact',component:TeacherFeedbackPage},      
      {title:'Gallery',icon:'contact',component:GalleryPage},
      {title:'Events', icon:'contact',component:ViewEventsPage}
    ];
    //initializing the common array elements for side menu
    this.help=[
      {title:'About Us', icon:'contact',component:AboutUsPage},
      {title:'Settings',icon:'contact',component:SettingPage}
           
    ];

  }

  openPage(page)
  {
    this.navCtrl.setRoot(page.component);
  }
  // goToHome(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(HomePage);
  // }
  goToLogin()
  {
   
    const confirm = this.altertCtrl.create({
      title: 'Are You Sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.nativeStorage.remove('LoginInfo').then(
                ()=>{'Removed Successfully'},
                error=> console.log('Error Removing data '+error)
            );
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  showToast(msg:any,time:number,dismiss:boolean){
    this.toast = this.toastCtrl.create({
      message: msg ,
      duration: time ,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK',
  });
 // if(dismiss===true)
      
  // Handle "ok" button action
this.toast.onDidDismiss((data, role) => {
  if (role == 'close') {
      //Do something on press of "Ok" button
  }
});
this.toast.present();
  }
 
}