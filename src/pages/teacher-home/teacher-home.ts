import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';
//import { MarkAttendancePage } from '../mark-attendance/mark-attendance';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { AttendenceInfoPage } from '../attendence-info/attendence-info';
import { ViewCalendarPage } from '../view-calendar/view-calendar';
import { TeacherUploadHomeworkPage } from '../teacher-upload-homework/teacher-upload-homework';
import { CreateTestPage } from '../create-test/create-test';
import { UploadMarksInfoPage } from '../upload-marks-info/upload-marks-info';

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController,
    public GU:ServiceGetClassMasterProvider,public GCM:ServiceGetClassMasterProvider,public alertCtrl:AlertController) {
    this.Menu.enable(true);
   
    
  }

  //Announces Function
  gotoTeacherAnnounces()
  {
    this.navCtrl.push(TeacherAnnouncementPage);
  }

  Mark()
  {
    this.navCtrl.push(AttendenceInfoPage);
    //this.GU.getUserFun();
  }

  gotoCalendar()
  {
    this.navCtrl.push(ViewCalendarPage);
  }
  uploadHW()
  {
    this.navCtrl.push(TeacherUploadHomeworkPage);
  }

  CreateTest()
  {
    this.navCtrl.push(CreateTestPage);
    this.GCM.getClassFun();
    this.GCM.getSessionFun();
    this.GCM.getTermFun();
    this.GCM.getSubjectFun();
  }

selectClass()
{
  this.navCtrl.push(UploadMarksInfoPage)
  this.GCM.getClassFun();

}

}
