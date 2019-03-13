import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DeleteSubjectsPage } from '../delete-subjects/delete-subjects';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log("data inside the adim delete interface",this.sujectlist);
                
  }
  DeleteSubject()
  {
    this.navCtrl.push(DeleteSubjectsPage);
  }  
}
