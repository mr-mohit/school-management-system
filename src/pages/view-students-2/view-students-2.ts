import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ResultPage } from '../result/result';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';
import { ServiceViewUserProvider } from '../../providers/service-view-user/service-view-user';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserPage } from '../view-user/view-user';


@IonicPage()
@Component({
  selector: 'page-view-students-2',
  templateUrl: 'view-students-2.html',
})
export class ViewStudents_2Page {


  constructor(public navCtrl: NavController, public navParams: NavParams,public CS:ServiceGetClassMasterProvider,
    public RES:ServiceStudentResultProvider,public VU:ServiceViewUserProvider) {
  }

  submit(REG)
  {
    console.log(REG);
    this.navCtrl.push(ResultPage);
    this.RES.getResultFun(REG); // sending th
  }

  enter(REG){
    
     let a = parseInt(REG);
    console.log("REGISTRATION",typeof a, a);
    this.VU.postUserID(a);
    this.navCtrl.push(ViewUserPage);
   

  }

}
