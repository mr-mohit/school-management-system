import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DeleteSubjectsPage } from '../delete-subjects/delete-subjects';
import { DeleteClassPage } from '../delete-class/delete-class';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { DeleteSessionPage } from '../delete-session/delete-session';
import { DeleteTermPage } from '../delete-term/delete-term';

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
    //console.log("data inside the adim delete interface",this.sujectlist);
                
  }
  DeleteSubject()
  {
    this.navCtrl.push(DeleteSubjectsPage);
  }  

  DeleteClass()
  {
    this.navCtrl.push(DeleteClassPage);
    this.cid.getClassFun();
  }

  DeleteSession()
  {
    this.navCtrl.push(DeleteSessionPage);
    this.cid.getSessionFun();
  }

  DeleteTerm()
  {
    this.navCtrl.push(DeleteTermPage);
    this.cid.getTermFun();
  }


}
