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
import { QuizServiceProvider } from '../providers/quiz-service/quiz-service';
import { StudentQuiz1Page } from '../pages/student-quiz1/student-quiz1';
import { AdminAddPage } from '../pages/admin-add/admin-add';
import { AdminViewPage } from '../pages/admin-view/admin-view';
import { AdminAnnouncementsPage } from '../pages/admin-announcements/admin-announcements';
import { AdminDeletePage } from '../pages/admin-delete/admin-delete';
import { AdminUpdatePage } from '../pages/admin-update/admin-update';
import { AdminMessagesPage } from '../pages/admin-messages/admin-messages';
import { AddUsersPage } from '../pages/add-users/add-users';
import { ServiceLoginProvider } from '../providers/service-login/service-login';
import {TeacherProfilePage} from '../pages/teacher-profile/teacher-profile';
import { ServiceAddsubjectProvider } from '../providers/service-addsubject/service-addsubject';
import {AdminProfilePage} from '../pages/admin-profile/admin-profile';
import { ServiceAdduserProvider } from '../providers/service-adduser/service-adduser';
import { StudentQuizPage } from '../pages/student-quiz/student-quiz';
import { StudentProfilePage } from '../pages/student-profile/student-profile';
import { AddSubjectsPage } from '../pages/add-subjects/add-subjects';
import { NativeStorage } from '@ionic-native/native-storage';
import { AddSessionPage } from '../pages/add-session/add-session';
import { ServiceAddSessionProvider } from '../providers/service-add-session/service-add-session';
import { ServiceAdminAnnouncements } from '../providers/service-AdminAnnoucement/service-announcement';
import { ServiceAddTermProvider } from '../providers/service-add-term/service-add-term';
import { AddTermPage } from '../pages/add-term/add-term';
import { ServiceViewSessionProvider } from '../providers/service-view-session/service-view-session';
import { AddClassPage } from '../pages/add-class/add-class';
import { ServiceAddClassProvider } from '../providers/service-add-class/service-add-class';
import { ClassSubjectRegPage } from '../pages/class-subject-reg/class-subject-reg';
import { ServiceGetClassMasterProvider } from '../providers/service-get-class-master/service-get-class-master';
import { ServiceClassSubjectRegProvider } from '../providers/service-class-subject-reg/service-class-subject-reg';
import { File } from '@ionic-native/file';
import { Transfer} from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ServiceResetpasswordProvider } from '../providers/service-resetpassword/service-resetpassword';
import { Resetpassword2Page } from '../pages/resetpassword2/resetpassword2';
import { ViewUserPage } from '../pages/view-user/view-user';
import { UpdateUserPage } from '../pages/update-user/update-user';
import { ServiceUpdateUserProvider } from '../providers/service-update-user/service-update-user';
import { ServiceViewUserProvider } from '../providers/service-view-user/service-view-user';
 

 @NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpasswordPage,
    Resetpassword2Page,
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
    AdminProfilePage,
    StudentQuizPage,
    StudentQuiz1Page,
    AdminHomePage,
    SettingPage,
    StudentProfilePage,
    AdminAddPage,
    AdminViewPage,
    AdminAnnouncementsPage,
    AdminDeletePage,
    AdminUpdatePage,
    AdminMessagesPage,
    AddUsersPage,
    AddSubjectsPage,
    SettingPage,
    StudentProfilePage,
    AddSessionPage,
    AddTermPage,
    AddClassPage,
    ClassSubjectRegPage,
    ViewUserPage,
    UpdateUserPage
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
    Resetpassword2Page,
    TeacherHomePage,
    StudentdashboardPage,
    TeacherdashboardPage,
    TeacherProfilePage,
    StudentExamsPage,
    StudentQuizPage,
    StudentQuiz1Page,
    StudentAttendancePage,
    StudentAnnouncementsPage,
    StudentTimeTablePage,
    StudentResultPage,
    AdminDashboardPage,
    AdminProfilePage,
    AdminHomePage,
    SettingPage,
    StudentProfilePage,
    AdminAddPage,
    AdminViewPage,
    AdminAnnouncementsPage,
    AdminDeletePage,
    AdminUpdatePage,
    AdminMessagesPage,
    AddUsersPage,
    AddSubjectsPage,
    SettingPage,
    StudentProfilePage,
    AddSessionPage,
    AddTermPage,
    AddClassPage,
    ClassSubjectRegPage,
    ViewUserPage,
    UpdateUserPage
  ],
  providers: [
    StatusBar,
    //SQLite,
    //SQLiteObject,
    SplashScreen,

    File, 
    Transfer,
    Camera,
    FilePath,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceLoginProvider,
    ServiceAdduserProvider,
    NativeStorage,
    ServiceAddSessionProvider,
    QuizServiceProvider,
    ServiceAddsubjectProvider,
    ServiceAdminAnnouncements,
    ServiceAddTermProvider,
    ServiceViewSessionProvider,
    ServiceAddClassProvider,
    ServiceGetClassMasterProvider,
    ServiceClassSubjectRegProvider,
    ServiceResetpasswordProvider,
    NativeStorage,
    ServiceUpdateUserProvider,
    ServiceViewUserProvider
  ]
})
export class AppModule {}