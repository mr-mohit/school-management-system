import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UpdateUserPage } from '../update-user/update-user';
import { UpdateClassPage } from '../update-class/update-class';
import { UpdateSessionPage } from '../update-session/update-session';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { UpdateTermPage } from '../update-term/update-term';
import { UpdateSubjectsPage } from '../update-subjects/update-subjects';

/**
 * Generated class for the AdminUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-update',
  templateUrl: 'admin-update.html',
})
export class AdminUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public GS:ServiceGetClassMasterProvider) {
  }

  // update user
  updateUser()
  {
    this.navCtrl.push(UpdateUserPage);
  }
  UpdateClass()
  {
    this.navCtrl.push(UpdateClassPage);
    this.GS.getClassFun();
  }
  UpdateSession()
  {
    this.navCtrl.push(UpdateSessionPage);
    this.GS.getSessionFun();
  }
  UpdateTerm()
  {
    this.navCtrl.push(UpdateTermPage);
    this.GS.getTermFun();
    this.GS.getSessionFun();
  }
  UpdateSubject()
  {
    this.navCtrl.push(UpdateSubjectsPage);
    this.GS.getSubjectFun();
  }
}
