import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@IonicPage()
@Component({
  selector: 'page-student-attendance',
  templateUrl: 'student-attendance.html',
})
export class StudentAttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public SA:ServiceGetClassMasterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAttendancePage');
  }

}
