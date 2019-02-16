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
import { ParentHomePage } from '../pages/parent-home/parent-home';
import { StudentdashboardPage } from '../pages/studentdashboard/studentdashboard';
import { ProfilePage } from '../pages/profile/profile';
import { ServiceProvider } from '../providers/service/service';
import {HttpClientModule} from '@angular/common/http';
import { TeacherdashboardPage } from '../pages/teacherdashboard/teacherdashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetpasswordPage,
    TeacherHomePage,
    ParentHomePage,
    StudentdashboardPage,
    TeacherdashboardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetpasswordPage,
    TeacherHomePage,
    ParentHomePage,
    StudentdashboardPage,
    TeacherdashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}