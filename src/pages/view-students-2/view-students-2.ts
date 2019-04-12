import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ResultPage } from '../result/result';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';

import { ViewStudentPage } from '../view-student/view-student';


@IonicPage()
@Component({
  selector: 'page-view-students-2',
  templateUrl: 'view-students-2.html',
})
export class ViewStudents_2Page {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public CS:ServiceGetClassMasterProvider,
    public RES:ServiceStudentResultProvider) {
  }

  submit(REG)
  {
    console.log(REG);
    this.navCtrl.push(ResultPage,{"reg":REG});
    this.RES.getResultFun(REG); 
  }

  enter(REG){
    
    console.log(REG);
    this.RES.ViewStudentFun(REG);
    this.navCtrl.push(ViewStudentPage);
   

  }

}
