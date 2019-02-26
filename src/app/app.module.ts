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
import { ProfilePage } from '../pages/profile/profile';
import { TeacherdashboardPage } from '../pages/teacherdashboard/teacherdashboard';

import { NewseviceProvider } from '../providers/newsevice/newsevice';
import { HttpClientModule } from '@angular/common/http';
import { StudentExamsPage } from '../pages/student-exams/student-exams';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { SettingPage } from '../pages/setting/setting';
import { StudentQuizPage } from '../pages/student-quiz/student-quiz';
import { QuizServiceProvider } from '../providers/quiz-service/quiz-service';
import { StudentQuiz1Page } from '../pages/student-quiz1/student-quiz1';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetpasswordPage,
    TeacherHomePage,
    StudentdashboardPage,
    TeacherdashboardPage,
    StudentExamsPage,
    AdminDashboardPage,
    StudentQuizPage,
    StudentQuiz1Page,
    AdminHomePage,
    SettingPage
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
    ProfilePage,
    ResetpasswordPage,
    TeacherHomePage,
    StudentdashboardPage,
    TeacherdashboardPage,
    StudentExamsPage,
    StudentQuizPage,
    StudentQuiz1Page,
    AdminDashboardPage,
    AdminHomePage,
    SettingPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewseviceProvider,
    QuizServiceProvider
  ]
})
export class AppModule {}