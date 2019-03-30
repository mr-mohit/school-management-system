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

  Submit()
  {
    console.log("class id as per students to be display",this.classID);
    this.navCtrl.push(MarkAttendancePage);
    this.GU.getAttStudentsFun(this.classID);
  }

  getSubject(Class)
  {
    this.classID=Class;
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(this.classID);
  }
}
