import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';
//import { MarkAttendancePage } from '../mark-attendance/mark-attendance';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { AttendenceInfoPage } from '../attendence-info/attendence-info';
import { ViewCalendarPage } from '../view-calendar/view-calendar';

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController,public GU:ServiceGetClassMasterProvider) {
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

}
