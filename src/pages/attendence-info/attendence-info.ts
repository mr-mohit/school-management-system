import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { MarkAttendancePage } from '../mark-attendance/mark-attendance';



@IonicPage()
@Component({
  selector: 'page-attendence-info',
  templateUrl: 'attendence-info.html',
})
export class AttendenceInfoPage {
  public classID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider) {
  this.GU.getClassFun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendenceInfoPage');
  }

  Submit(DATE,TIME,SLOT,Class,Subject)
  {
    console.log("Date",DATE," Time",TIME,'TIME-SLOT',SLOT,"Class_ID",Class,"Sobject",Subject)
    //console.log("class id as per students to be display",this.classID);
    if(DATE!=undefined && TIME!= undefined && SLOT!=undefined && Class!=undefined && Subject!=undefined)
    {
      this.navCtrl.push(MarkAttendancePage,{"date":DATE,"time":TIME,"slot":SLOT,"class":Class,"subject":Subject});
      this.GU.getSDCFun(this.classID);
    }
    else
    {
      alert("Please select required fields.")
    }
    
  }

  getSubject(Class)
  {
    this.classID=Class;
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(this.classID);
  }
}
