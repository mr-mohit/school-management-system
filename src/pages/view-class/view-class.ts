import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

@IonicPage()
@Component({
  selector: 'page-view-class',
  templateUrl: 'view-class.html',
})
export class ViewClassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public VC:ServiceGetClassMasterProvider) {
    this.VC.getClassFun();
  console.log(this.VC.classData);
  }


}
