import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { TeacherHomePage } from '../pages/teacher-home/teacher-home';
import { StudentdashboardPage } from '../pages/studentdashboard/studentdashboard';
import { TeacherdashboardPage } from '../pages/teacherdashboard/teacherdashboard';
import { HttpClientModule } from '@angular/common/http';
import { StudentExamsPage } from '../pages/student-exams/student-exams';
import { ServiceLoginProvider } from '../providers/service-login/service-login';
import {StudentProfilePage} from '../pages/student-profile/student-profile';
import {TeacherProfilePage} from '../pages/teacher-profile/teacher-profile';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpasswordPage,
    TeacherHomePage,
    TeacherProfilePage,
    StudentdashboardPage,
    TeacherdashboardPage,
    StudentExamsPage,
    StudentProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpasswordPage,
    TeacherHomePage,
    StudentdashboardPage,
    TeacherdashboardPage,
    TeacherProfilePage,
    StudentExamsPage,
    StudentProfilePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceLoginProvider
  ]
})
export class AppModule {}