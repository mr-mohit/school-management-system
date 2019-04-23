import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StudentExamsPage } from '../student-exams/student-exams';
import { StudentTimeTablePage } from '../student-time-table/student-time-table';
import { StudentAttendancePage } from '../student-attendance/student-attendance';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';
import { ViewCalendarPage } from '../view-calendar/view-calendar';
import { ResultPage } from '../result/result';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';
import { StudentMessagePage } from '../student-message/student-message';
import { ServiceStudentMessageProvider } from '../../providers/service-student-message/service-student-message';
import { StudentHomeworkPage } from '../student-homework/student-homework';
import { ServiceStudentHomeworkProvider } from '../../providers/service-student-homework/service-student-homework';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Reg:any;

  constructor(public navCtrl: NavController, public Menu: MenuController,public CRD:ServiceLoginProvider ,
    public result:ServiceStudentResultProvider,public UR:ServiceLoginProvider, 
    public SM:ServiceStudentMessageProvider, public SH:ServiceStudentHomeworkProvider,
     public SA:ServiceGetClassMasterProvider
    ) {
    this.Menu.enable(true);
  }

//Student Functions
  gotoStudentAttendance()
  {
    this.navCtrl.push(StudentAttendancePage);
    this.SA.getSAFun(this.UR.reg);
  }

  gotoStudentAnnouncements()
  {
    this.navCtrl.push(TeacherAnnouncementPage);
  }
  //get messages
  gotoStudentMessages()
  {
    this.SM.getData(this.UR.reg).then(data=>{

      if(data['statuscode'] == 1)
      {
        this.navCtrl.push(StudentMessagePage);
     
      }

    }); //get message data according to the user 
   

  }
  // fetch available Homework
  gotoStudentHomework()
  {

      this.SH.getClassHomeWork(this.UR.reg).then(data=>{

        if(data['statuscode'] == 1)
        {
          this.navCtrl.push(StudentHomeworkPage);
      
        }
      });
      //this.navCtrl.push(StudentHomeworkPage);
  }
  //
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
    this.navCtrl.push(ResultPage,{"data":this.UR.reg});
    this.Reg=this.CRD.recdata;
    console.log(this.Reg);
    this.result.getResultFun(this.UR.reg);
    console.log(this.UR.reg,'spelling mistake');
  
  
  }
 
  gotoViewCalendar()
  {
    this.navCtrl.push(ViewCalendarPage);
  }
   

}
