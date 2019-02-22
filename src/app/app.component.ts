import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
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
import { NewseviceProvider } from '../providers/newsevice/newsevice';
import { StudentdashboardPage } from '../pages/studentdashboard/studentdashboard';
import { ServiceLoginProvider } from '../providers/service-login/service-login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;
    //declaration of array for side menu
    Student_a:Array<{title:string, icon:string,component:any,}>;    //array for student
    Teacher_a:Array<{title:string, icon:string,component:any,}>;    //array for teacher
    help:Array<{title:string, icon:string,component:any,}>;

  constructor(platform: Platform, statusBar: StatusBar,
             public service:ServiceLoginProvider, splashScreen: SplashScreen,public altertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackOpaque();
      splashScreen.hide();

    });
    
    //initalizating the student array elements for side menu
    this.Student_a=[
      {title:'School Info', icon:'contact', component:SchoolInfoPage},
      {title:'Events', icon:'contact',component:ViewEventsPage},
      {title:'Feedback', icon:'contact',component:StudentFeedbackPage},
      {title:'Quiz', icon:'contact', component:StudentQuizPage},
      {title:'Gallery',icon:'contact',component:GalleryPage}
    ];

    //initalizating the teacher array elements for side menu
    this.Teacher_a=[
      {title:'Send Messages', icon:'contact',component:TeacherSendMessagePage},
      {title:'Set Announcement',icon:'contact',component:TeacherAnnouncementPage},
      {title:'feedback',icon:'contact',component:TeacherFeedbackPage},      
      {title:'Gallery',icon:'contact',component:GalleryPage},
      {title:'Events', icon:'contact',component:ViewEventsPage}
    ];
    //initalizating the common array elements for side menu
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
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
 
}

