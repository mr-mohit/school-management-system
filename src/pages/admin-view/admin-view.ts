import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewUserPage } from '../view-user/view-user';
import { ViewSubjectsPage } from '../view-subjects/view-subjects';
import { ViewClassPage } from '../view-class/view-class';
import { ViewTermPage } from '../view-term/view-term';
import { ViewSessionPage } from '../view-session/view-session';
import { ViewTimeTablePage } from '../view-time-table/view-time-table';

/**
 * Generated class for the AdminViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-view',
  templateUrl: 'admin-view.html',
})
export class AdminViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ViewClass()
 {
   this.navCtrl.push(ViewClassPage);
 }

  // view user 
  viewUser()
  {
      this.navCtrl.push(ViewUserPage);
  }
  
  ViewSubject()
  {
    this.navCtrl.push(ViewSubjectsPage);
  }
  ViewTerm()
  {
    this.navCtrl.push(ViewTermPage);
  }
  ViewSession()
  {
    this.navCtrl.push(ViewSessionPage);
  }
  ViewTimeTable()
  {
    this.navCtrl.push(ViewTimeTablePage);
  }
}
