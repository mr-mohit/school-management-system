import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StudentExamsPage } from '../student-exams/student-exams';
import { StudentTimeTablePage } from '../student-time-table/student-time-table';
import { StudentAttendancePage } from '../student-attendance/student-attendance';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';
import { StudentResultPage } from '../student-result/student-result';
import { ViewCalendarPage } from '../view-calendar/view-calendar';
import { ResultPage } from '../result/result';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Reg:any;

  constructor(public navCtrl: NavController, public Menu: MenuController,public CRD:ServiceLoginProvider ) {
    this.Menu.enable(true);
  }

//Student Functions
  gotoStudentAttendance()
  {
    this.navCtrl.push(StudentAttendancePage);
  }

  gotoStudentAnnouncements()
  {
    this.navCtrl.push(TeacherAnnouncementPage);
  }
  
  gotoStudentTimeTable()
  {
    this.navCtrl.push(StudentTimeTablePage);
  }

  gotoStudentExams()
  {
    this.navCtrl.push(StudentExamsPage);
  }

  gotoStudentResult()
  {
    this.navCtrl.push(ResultPage);
    this.Reg=this.CRD.recdata;
    console.log(this.Reg);
  
  }
 
  gotoViewCalendar()
  {
    this.navCtrl.push(ViewCalendarPage);
  }
   

}
