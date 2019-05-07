import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { StudentQuizPage } from '../pages/student-quiz/student-quiz';
import { GalleryPage } from '../pages/gallery/gallery';
import { StudentFeedbackPage } from '../pages/student-feedback/student-feedback';
import { TeacherFeedbackPage } from '../pages/teacher-feedback/teacher-feedback';
import { TeacherSendMessagePage } from '../pages/teacher-send-message/teacher-send-message';
import { TeacherAnnouncementPage } from '../pages/teacher-announcement/teacher-announcement';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SettingPage } from '../pages/setting/setting';
import { ServiceLoginProvider } from '../providers/service-login/service-login';
import { StudentdashboardPage } from '../pages/studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../pages/teacherdashboard/teacherdashboard';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';
//import { SchoolInfoPage } from '../pages/school-info/school-info';
import { ViewCalendarPage } from '../pages/view-calendar/view-calendar';
import { ServiceAdminmessageProvider } from '../providers/service-adminmessage/service-adminmessage';
import { DeleteTermPage } from '../pages/delete-term/delete-term';
import { DeleteTestPage } from '../pages/delete-test/delete-test';
import { AdminMessagesPage } from '../pages/admin-messages/admin-messages';


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
    public lang:string;
    //declaration of array for side menu
    Student_a:Array<{title:string, icon:string,component:any,}>;    //array for student
    Teacher_a:Array<{title:string, icon:string,component:any,}>;    //array for teacher
    Admin_a:Array<{title:string,icon:string,component:any}>;        //for Admin
    help:Array<{title:string, icon:string,component:any,}>;         //Same For All


  constructor(platform: Platform, statusBar: StatusBar,private nativeStorage: NativeStorage,public toastCtrl: ToastController,
             public service:ServiceLoginProvider,public splashScreen: SplashScreen, private push: Push,
             public alertCtrl:AlertController,public translate:TranslateService, private localNotifications: LocalNotifications,
             public messageserv:ServiceAdminmessageProvider) {

              platform.ready().then(() => {

                this.splashScreen.hide();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      translate.addLangs(["en", "fr"]);
      translate.setDefaultLang('en');
      //let browserLang = translate.getBrowserLang();
      //translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  used as a fallback procedure

      this.nativeStorage.getItem('languageInfo')
      .then(
        data1 => {this.lang=data1.Language,
                  console.log(this.lang),
                  translate.use(this.lang); },
        error => {console.error(error)}
      
      );
  
      statusBar.styleBlackOpaque();
      splashScreen.hide();

      this.nativeStorage.getItem('LoginInfo')
  .then(
    data => {this.userId= data.RegistrationId;
            this.pass=data.PASSWORD;
            this.type=data.role.toLowerCase();

            if(this.userId!=undefined){
              if(this.type ==='admin'){
                  this.rootPage=AdminDashboardPage;
                  console.log(this.userId+' '+this.pass);
              }else if(this.type ==='student'){
                  this.rootPage=StudentdashboardPage;
              }else if(this.type ==='teacher'){
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
     // {title:'School Info', icon:'contact', component:SchoolInfoPage},
      {title:'Events', icon:'calendar',component:ViewCalendarPage},
      {title:'Feedback', icon:'thumbs-up',component:StudentFeedbackPage},
      {title:'Quiz', icon:'list', component:StudentQuizPage},
      {title:'Gallery',icon:'images',component:GalleryPage}
    ];

    //initializing the teacher array elements for side menu
    this.Teacher_a=[
      {title:'Home', icon:'home',component:TeacherdashboardPage},
      {title:'Messages', icon:'text',component:TeacherSendMessagePage},
      {title:'Announcements',icon:'megaphone',component:TeacherAnnouncementPage},
      {title:'Feedback',icon:'thumbs-up',component:TeacherFeedbackPage},      
      {title:'Gallery',icon:'images',component:GalleryPage},
      {title:'Events', icon:'calendar',component:ViewCalendarPage},
      {title:'Delete Test',icon:'book',component:DeleteTestPage}
    ];
    //initializing the Admin array elements for side menu
    this.Admin_a=[
      {title:"Home",icon:"home",component:AdminDashboardPage},
      {title:"Gallery",icon:"images",component:GalleryPage},
      
    ];

    //initializing the common array elements for side menu
    this.help=[
      {title:'About', icon:'mail',component:AboutUsPage},
      {title:'Settings',icon:'settings',component:SettingPage}
           
    ];

  }

  openPage(page)
  {
    //console.log(page.component);
    this.navCtrl.push(page.component);
  }
  // goToHome(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(HomePage);
  // }
  goToLogin()
  {
   
    const confirm = this.alertCtrl.create({
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

  //push notification :
   // for push notification
   pushSetup() {
    const options: PushOptions = {
      android: {
        senderID: '954708913827'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);

     // Here you get the recived Notification Object
    pushObject.on('notification').subscribe((notification: any) => {
      //this.showAlert(notification);
      console.log("Recieved Notification",notification);
      this.getnotification(notification);
    });

     //Here we get the FCM id for specific user
    pushObject.on('registration').subscribe((registration: any) =>{
       console.log('Device registered', registration)
       // here we will insert registration into fcm_key column of user table of our database 
       // and the row corresponding of the user who has logged in with the corresponding phone
       this.getregistration(registration);
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  showAlert(data) {
    const alert = this.alertCtrl.create({
      title: data.title,
      subTitle: data.message,
      buttons: ['OK']
    });
    alert.present();
  }

  // Schedule delayed notification
  getnotification(notification) {
    console.log("Recieved Notification Inside Local",notification);
    this.localNotifications.schedule({
     
      title:notification.title,
      text:notification.message,
      trigger: { at: new Date(new Date().getTime() + 3600) },
      data:{'id':1,'name':"nhdhsdjh"}
      //led: 'FF0000',
      //sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
    });
  }

  getregistration(registration)
  {
    this.messageserv.fcndata.updatefcm(this.userId,registration);
  }
 
}