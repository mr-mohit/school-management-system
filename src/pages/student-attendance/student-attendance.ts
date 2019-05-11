import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@IonicPage()
@Component({
  selector: 'page-student-attendance',
  templateUrl: 'student-attendance.html',
})
export class StudentAttendancePage {
  public sub:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public SA:ServiceGetClassMasterProvider) {
  this.sub=this.navParams.get("data");
  console.log(this.sub);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAttendancePage');
    console.log(this.SA.crSub);
  }
 test(STATUS)
 {
   console.log("row is clicked",STATUS);
 }
}
