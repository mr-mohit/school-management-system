import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { DeleteSubjectsPage } from '../delete-subjects/delete-subjects';
import { DeleteClassPage } from '../delete-class/delete-class';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { DeleteSessionPage } from '../delete-session/delete-session';
import { DeleteTermPage } from '../delete-term/delete-term';
import { DeleteUserPage } from '../delete-user/delete-user';
import { DeleteTimeTablePage } from '../delete-time-table/delete-time-table';

/**
 * Generated class for the AdminDeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-delete',
  templateUrl: 'admin-delete.html',
})
export class AdminDeletePage {

  public sujectlist:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cid:ServiceGetClassMasterProvider) {
  }
  DeleteSubject()
  {
    this.navCtrl.push(DeleteSubjectsPage);
    this.cid.getSubjectFun();
  }  

  DeleteClass()
  {
    this.navCtrl.push(DeleteClassPage);
    this.cid.getClassFun();
  }

  // DeleteSession()
  // {
  //   this.navCtrl.push(DeleteSessionPage);
  //   this.cid.getSessionFun();
  // }

  // DeleteTerm()
  // {
  //   this.navCtrl.push(DeleteTermPage);
  //   this.cid.getTermFun();
  // }

  DeleteUser()
  {
    this.navCtrl.push(DeleteUserPage);
    //this.cid.getTermFun();
  }

  DeleteTimeTable()
  {
    this.navCtrl.push(DeleteTimeTablePage);
  }


}
