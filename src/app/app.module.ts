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
import { StudentAttendancePage } from '../pages/student-attendance/student-attendance';
import { StudentAnnouncementsPage } from '../pages/student-announcements/student-announcements';
import { StudentTimeTablePage } from '../pages/student-time-table/student-time-table';
import { StudentResultPage } from '../pages/student-result/student-result';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { SettingPage } from '../pages/setting/setting';
import { AdminAddPage } from '../pages/admin-add/admin-add';
import { AdminViewPage } from '../pages/admin-view/admin-view';
import { AdminAnnouncementsPage } from '../pages/admin-announcements/admin-announcements';
import { AdminDeletePage } from '../pages/admin-delete/admin-delete';
import { AdminUpdatePage } from '../pages/admin-update/admin-update';
import { AdminMessagesPage } from '../pages/admin-messages/admin-messages';
import { AddUsersPage } from '../pages/add-users/add-users';
import { UserAddressPage } from '../pages/user-address/user-address';
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
    StudentAttendancePage,
    StudentAnnouncementsPage,
    StudentTimeTablePage,
    StudentResultPage,
    AdminDashboardPage,
    AdminHomePage,
    AdminAddPage,
    AdminViewPage,
    AdminAnnouncementsPage,
    AdminDeletePage,
    AdminUpdatePage,
    AdminMessagesPage,
    AddUsersPage,
    UserAddressPage,
    SettingPage,
    StudentProfilePage
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
    StudentAttendancePage,
    StudentAnnouncementsPage,
    StudentTimeTablePage,
    StudentResultPage,
    AdminDashboardPage,
    AdminHomePage,
    AdminAddPage,
    AdminViewPage,
    AdminAnnouncementsPage,
    AdminDeletePage,
    AdminUpdatePage,
    AdminMessagesPage,
    AddUsersPage,
    UserAddressPage,

    
    SettingPage,
    StudentProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceLoginProvider
  ]
})
export class AppModule {}