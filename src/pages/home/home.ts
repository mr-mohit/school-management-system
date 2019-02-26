import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StudentExamsPage } from '../student-exams/student-exams';
import { StudentTimeTablePage } from '../student-time-table/student-time-table';
import { StudentAttendancePage } from '../student-attendance/student-attendance';
import { StudentAnnouncementsPage } from '../student-announcements/student-announcements';
import { StudentResultPage } from '../student-result/student-result';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public Menu: MenuController ) {
    this.Menu.enable(true);
  }

//Student Functions
  gotoStudentAttendance()
  {
    this.navCtrl.push(StudentAttendancePage);
  }

  gotoStudentAnnouncements()
  {
    this.navCtrl.push(StudentAnnouncementsPage);
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
    this.navCtrl.push(StudentResultPage);
  }
 
  
}
