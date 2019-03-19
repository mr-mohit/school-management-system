import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the ViewSessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-session',
  templateUrl: 'view-session.html',
})
export class ViewSessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewSession:ServiceGetClassMasterProvider) {
              this.viewSession.getSessionFun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewSessionPage');
  }

}
