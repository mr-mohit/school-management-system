import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
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
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { StudentExamsPage } from '../pages/student-exams/student-exams';
import { StudentAttendancePage } from '../pages/student-attendance/student-attendance';
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
import { ServiceDeleteSubjectProvider } from '../providers/service-delete-subject/service-delete-subject';
import { DeleteSubjectsPage } from '../pages/delete-subjects/delete-subjects';
import { AddSessionPage } from '../pages/add-session/add-session';
import { ChangePasswordPage } from '../pages/change-password/change-password';
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
import { ServiceDeleteClassProvider } from '../providers/service-delete-class/service-delete-class';
import { DeleteClassPage } from '../pages/delete-class/delete-class';
import { ServiceDeleteSessionProvider } from '../providers/service-delete-session/service-delete-session';
import { ServiceDeleteTermProvider } from '../providers/service-delete-term/service-delete-term';
import { DeleteSessionPage } from '../pages/delete-session/delete-session';
import { DeleteTermPage } from '../pages/delete-term/delete-term';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TeacherAnnouncementPage } from '../pages/teacher-announcement/teacher-announcement';
import { ServiceAnnouncementProvider } from '../providers/service-announcement/service-announcement';
import { AnnouncementDetailsPage } from '../pages/announcement-details/announcement-details';
import { ViewSubjectsPage } from '../pages/view-subjects/view-subjects';
import { ViewClassPage } from '../pages/view-class/view-class';
import { ViewTermPage } from '../pages/view-term/view-term';
import { UpdateClassPage } from '../pages/update-class/update-class';
import { UpdateSessionPage } from '../pages/update-session/update-session';
import { ViewSessionPage } from '../pages/view-session/view-session';
import { UpdateSubjectsPage } from '../pages/update-subjects/update-subjects';
import { UpdateTermPage } from '../pages/update-term/update-term';
import { ServiceUpdateProvider } from '../providers/service-update/service-update';
import { AddTimetablePage } from '../pages/add-timetable/add-timetable';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AddEventPage } from '../pages/add-event/add-event';
import { ServiceAddEventProvider } from '../providers/service-add-event/service-add-event';
import { ServiceChangepasswordProvider } from '../providers/service-changepassword/service-changepassword';
import { ServiceAddTimetableProvider } from '../providers/service-add-timetable/service-add-timetable';
import { MarkAttendancePage } from '../pages/mark-attendance/mark-attendance';
import { CalendarModule } from 'ionic3-calendar-en';
import { ViewCalendarPage } from '../pages/view-calendar/view-calendar';
import { AttendenceInfoPage } from '../pages/attendence-info/attendence-info';
import { ServiceDeleteUserProvider } from '../providers/service-delete-user/service-delete-user';
import { DeleteUserPage } from '../pages/delete-user/delete-user';
import { Push } from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SchoolInfoPage } from '../pages/school-info/school-info';
import { GalleryPage } from '../pages/gallery/gallery';
import { ServiceAdminmessageProvider } from '../providers/service-adminmessage/service-adminmessage';
import { TeacherUploadHomeworkPage } from '../pages/teacher-upload-homework/teacher-upload-homework';
import { CreateTestPage } from '../pages/create-test/create-test';
import { ServiceCreateTestProvider } from '../providers/service-create-test/service-create-test';
import { UploadMarksPage } from '../pages/upload-marks/upload-marks';
import { UploadMarksInfoPage } from '../pages/upload-marks-info/upload-marks-info';
import { ServiceUploadMarksProvider } from '../providers/service-upload-marks/service-upload-marks';
import { TeacherFeedbackPage } from '../pages/teacher-feedback/teacher-feedback';
import { TeacherTimeTablePage} from '../pages/teacher-time-table/teacher-time-table';
import { DeleteTimeTablePage } from '../pages/delete-time-table/delete-time-table';
import { StudentFeedbackPage } from '../pages/student-feedback/student-feedback';
import { ServiceAddStudentfeedbackProvider } from '../providers/service-add-studentfeedback/service-add-studentfeedback';
import { ServiceUploadAttendenceProvider } from '../providers/service-upload-attendence/service-upload-attendence';
import { FeedbackDetailPage } from '../pages/feedback-detail/feedback-detail';
import { ServiceFetchTimeTableProvider } from '../providers/service-fetch-time-table/service-fetch-time-table';
import { ResultPage } from '../pages/result/result';
import { ServiceGetResultProvider } from '../providers/service-get-result/service-get-result';
//import { ServiceUploadAttendenceProvider } from '../providers/service-upload-attendence/service-upload-attendence';
import { ServiceStudentResultProvider } from '../providers/service-student-result/service-student-result';
import { ServiceUploadHomeworkProvider } from '../providers/service-upload-homework/service-upload-homework';
import { ViewStudentsPage } from '../pages/view-students/view-students';
import { ViewStudents_2Page } from '../pages/view-students-2/view-students-2';
import { ViewStudentPage } from '../pages/view-student/view-student';
import { ServiceExamProvider } from '../providers/service-exam/service-exam';
import { ServiceDeleteTimetableProvider } from '../providers/service-delete-timetable/service-delete-timetable';
import { AssignSubPage } from '../pages/assign-sub/assign-sub';
import { ServiceGetTeacherProvider } from '../providers/service-get-teacher/service-get-teacher';
import { ServiceAssignSubProvider } from '../providers/service-assign-sub/service-assign-sub';
import { ServiceStudentMessageProvider } from '../providers/service-student-message/service-student-message';
import { StudentMessagePage } from '../pages/student-message/student-message';
import { StudentMessage2Page } from '../pages/student-message2/student-message2';
import { ServiceStudentHomeworkProvider } from '../providers/service-student-homework/service-student-homework';
import { StudentHomeworkPage } from '../pages/student-homework/student-homework';
import { DeleteAnnouncementsPage } from '../pages/delete-announcements/delete-announcements';
import { DeleteEditAnnouncementPage } from '../pages/delete-edit-announcement/delete-edit-announcement';
import { UpdateAnnouncementPage } from '../pages/update-announcement/update-announcement';
import { ViewTimeTablePage } from '../pages/view-time-table/view-time-table';
import{ServiceDeleteAndUpdateTimeTableProvider} from '../providers/Service-delete-and-update-time-table/Service-delete-and-update-time-table'
import { UpdateTimeTablePage } from '../pages/update-time-table/update-time-table';
import { UpdateMarksPage } from '../pages/update-marks/update-marks';
import { UpdateTestPage } from '../pages/update-test/update-test';
import { UpdateAttendancePage } from '../pages/update-attendance/update-attendance';
import { DeleteTestPage } from '../pages/delete-test/delete-test';
import { ServiceDeleteTestProvider } from '../providers/service-delete-test/service-delete-test';
import { ServiceGetResultDataProvider } from '../providers/service-get-result-data/service-get-result-data';
import { ServiceCalculateResultProvider } from '../providers/service-calculate-result/service-calculate-result';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
 
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { StudentSyllabusPage } from '../pages/student-syllabus/student-syllabus';
import { GetEventProvider } from '../providers/get-event/get-event';
import { StudentAttendanceSubjectsPage } from '../pages/student-attendance-subjects/student-attendance-subjects';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { ResultTermPage } from '../pages/result-term/result-term';

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
    UpdateUserPage,
    DeleteSubjectsPage,
    DeleteClassPage,
    DeleteSessionPage,
    DeleteTermPage,
    TeacherAnnouncementPage,
    AnnouncementDetailsPage,
    ViewSubjectsPage,
    ViewClassPage,
    ViewTermPage,
    UpdateClassPage,
    UpdateSessionPage,
    UpdateTermPage,
    ViewSessionPage,
    UpdateSubjectsPage,
    UpdateTermPage,
    AddTimetablePage,
    AboutUsPage,
    AddEventPage,
    ChangePasswordPage,
    SchoolInfoPage,
    GalleryPage,
    MarkAttendancePage,
    ViewCalendarPage,
    AttendenceInfoPage,
    DeleteUserPage,
    TeacherUploadHomeworkPage,
    CreateTestPage,
    UploadMarksPage,
    UploadMarksInfoPage,
    TeacherFeedbackPage,
    StudentFeedbackPage,
    TeacherFeedbackPage,
    FeedbackDetailPage,
    ResultPage,
    ViewStudentsPage,
    ViewStudents_2Page,
    ViewStudentPage,
    DeleteTimeTablePage,
    TeacherTimeTablePage,
    AssignSubPage,
    StudentMessagePage,
    StudentMessage2Page,
    StudentHomeworkPage,
    DeleteAnnouncementsPage,
    DeleteEditAnnouncementPage,
    UpdateAnnouncementPage,
    ViewTimeTablePage,
    UpdateTimeTablePage,
    UpdateMarksPage,
    UpdateTestPage,
    UpdateAttendancePage,
    DeleteTestPage,
    TeacherUploadHomeworkPage,
    StudentSyllabusPage,
    StudentAttendanceSubjectsPage,
    ResultTermPage,
    ResultPage,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
    RoundProgressModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    
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
    DeleteSubjectsPage,
    AddSessionPage,
    AddTermPage,
    AddClassPage,
    ClassSubjectRegPage,
    ViewUserPage,
    UpdateUserPage,
    DeleteClassPage,
    DeleteSessionPage,
    DeleteTermPage,
    TeacherAnnouncementPage,
    TeacherFeedbackPage,
    AnnouncementDetailsPage,
    ViewSubjectsPage,
    ViewClassPage,
    ViewTermPage,
    UpdateClassPage,
    UpdateSessionPage,
    ViewSessionPage,
    UpdateSubjectsPage,
    UpdateTermPage,
    AddTimetablePage,
    AboutUsPage,
    AddEventPage,
    ChangePasswordPage,
    DeleteUserPage,
    SchoolInfoPage,
    GalleryPage,
    MarkAttendancePage,
    ViewCalendarPage,
    AttendenceInfoPage,
    DeleteUserPage,
    TeacherUploadHomeworkPage,
    CreateTestPage,
    UploadMarksPage,
    UploadMarksInfoPage,
    TeacherFeedbackPage,
    StudentFeedbackPage,
    FeedbackDetailPage,
    ResultPage,
    ViewStudentsPage,
    ViewStudents_2Page,
    ViewStudentPage,
    DeleteTimeTablePage,
    TeacherTimeTablePage,
    AssignSubPage,
    StudentMessagePage,
    StudentMessage2Page,
    StudentHomeworkPage,
    DeleteAnnouncementsPage,
    DeleteEditAnnouncementPage,
    UpdateAnnouncementPage,
    ViewTimeTablePage,
    UpdateTimeTablePage,
    UpdateMarksPage,
    UpdateTestPage,
    UpdateAttendancePage,
    DeleteTestPage,
    TeacherUploadHomeworkPage,
    StudentSyllabusPage,
    StudentAttendanceSubjectsPage,
    ResultTermPage,
    ResultPage,
  ],
  providers: [
    StatusBar,
    //SQLite,
    //SQLiteObject,
    SplashScreen,

    File, 
    FileChooser,
    FileOpener,
    Transfer,
    Camera,
    FilePath,
    Push,
    LocalNotifications,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceLoginProvider,
    ServiceAdduserProvider,
    NativeStorage,
    ServiceAddSessionProvider,
    QuizServiceProvider,
    ServiceAddsubjectProvider,
    ServiceAdduserProvider,
    ServiceDeleteSubjectProvider,
    ServiceAdminAnnouncements,
    ServiceAddTermProvider,
    ServiceViewSessionProvider,
    ServiceAddClassProvider,
    ServiceGetClassMasterProvider,
    ServiceClassSubjectRegProvider,
    ServiceResetpasswordProvider,
    NativeStorage,
    ServiceUpdateUserProvider,
    ServiceViewUserProvider,
    ServiceDeleteClassProvider,
    ServiceDeleteSessionProvider,
    ServiceDeleteTermProvider,
    ServiceUpdateProvider,
    ServiceAnnouncementProvider,
    ServiceAddEventProvider,
    ChangePasswordPage,
    ServiceChangepasswordProvider,
    ServiceAddTimetableProvider,
    ServiceDeleteUserProvider,
    ServiceAdminmessageProvider,
    ServiceCreateTestProvider,
    ServiceUploadMarksProvider,
    ServiceAddStudentfeedbackProvider,
    ServiceUploadAttendenceProvider,
    ServiceFetchTimeTableProvider,
    ServiceGetResultProvider,
    ServiceFetchTimeTableProvider,
    ServiceGetResultProvider,
    ServiceUploadAttendenceProvider,
    ServiceStudentResultProvider,
    ServiceUploadHomeworkProvider,
  
    ServiceExamProvider,
    ServiceDeleteTimetableProvider,
    ServiceGetTeacherProvider,
    ServiceAssignSubProvider,
    ServiceStudentMessageProvider,
    ServiceStudentHomeworkProvider,
    ServiceDeleteTestProvider,
    ServiceGetResultDataProvider,
    ServiceCalculateResultProvider,
    ServiceDeleteAndUpdateTimeTableProvider,
    GetEventProvider,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 }