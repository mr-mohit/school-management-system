import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';
import{TeacherTimeTablePage} from '../teacher-time-table/teacher-time-table';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { AttendenceInfoPage } from '../attendence-info/attendence-info';
import { ViewCalendarPage } from '../view-calendar/view-calendar';
import { CreateTestPage } from '../create-test/create-test';
import { UploadMarksInfoPage } from '../upload-marks-info/upload-marks-info';
import { ViewStudentsPage } from '../view-students/view-students';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { AddEventPage } from '../add-event/add-event';

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController,
    public GU:ServiceGetClassMasterProvider,public GCM:ServiceGetClassMasterProvider,public alertCtrl:AlertController,
    public ad:ServiceLoginProvider) {
    this.Menu.enable(true);
   
    
  }

  //Announces Function
  gotoTeacherAnnounces()
  {
    this.navCtrl.push(TeacherAnnouncementPage);
  }

  TeacherTimeTable()
  {
    this.navCtrl.push(TeacherTimeTablePage);
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
gotoViewStudents()
{
  this.navCtrl.push(ViewStudentsPage);
  this.GCM.getClassFun();
  this.GCM.getSessionFun();
}

gotoEvents()
{
  this.navCtrl.push(AddEventPage);
}

}
