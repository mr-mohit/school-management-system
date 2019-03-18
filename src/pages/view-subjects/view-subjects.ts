import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@IonicPage()
@Component({
  selector: 'page-view-subjects',
  templateUrl: 'view-subjects.html',
})
export class ViewSubjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public VS:ServiceGetClassMasterProvider) {
  this.VS.getSubjectFun();
  console.log(this.VS.subjectData);
  }

  

}
