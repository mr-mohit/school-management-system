import { Component,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
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

  public current: number;
  public max: number = 100;
  stroke: number = 25;
  radius: number = 75;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = 'rgb(152, 243, 156)';
  duration: number = 2000;
  animationDelay: number = 50;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;


 public SUBJECT:any;
  public Att:any=
   {
     "REG":"",
    "SUBJECT":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,public SA:ServiceGetClassMasterProvider,
    public SL:ServiceLoginProvider) {
      //this.SA.perAttFun(this.SL.reg);
      this.current=this.SA.per;
      console.log(this.SA.per);
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
