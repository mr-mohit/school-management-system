import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the ViewTermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-term',
  templateUrl: 'view-term.html',
})
export class ViewTermPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public VT:ServiceGetClassMasterProvider) {
    this.VT.getTermFun();
    console.log(this.VT.termData);
  }


}
