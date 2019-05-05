import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { StudentAttendancePage } from '../student-attendance/student-attendance';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';


@IonicPage()
@Component({
  selector: 'page-student-attendance-subjects',
  templateUrl: 'student-attendance-subjects.html',
})
export class StudentAttendanceSubjectsPage {
 public SUBJECT:any;
  public Att:any=
   {
     "REG":"",
    "SUBJECT":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,public SA:ServiceGetClassMasterProvider,
    public SL:ServiceLoginProvider) {
  }

  getAtt(SB)
  {
     this.SUBJECT=SB;
     this.Att['REG']=this.SL.reg;
     this.Att['SUBJECT']=this.SUBJECT;
    this.navCtrl.push(StudentAttendancePage);
    this.SA.SubjectAttFun(this.Att);
    console.log(this.Att);

  }

}
