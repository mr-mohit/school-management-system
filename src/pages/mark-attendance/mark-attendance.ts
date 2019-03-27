import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


/**
 * Generated class for the MarkAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark-attendance',
  templateUrl: 'mark-attendance.html',
})
export class MarkAttendancePage {
  
  public attendence:any=[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkAttendancePage');
  }

  Submit(reg,status)
  {
    
    let att={
      "reg_no":"",
      "Status":""
    };
    att['reg_no']=reg;
    att['Status']=status;
    this.attendence.push(att);
  }

  viewAtt()
  {
    console.log("Attendance",this.attendence);
  }
}
