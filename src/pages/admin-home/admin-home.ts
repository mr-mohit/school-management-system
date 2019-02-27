import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminAddPage } from '../admin-add/admin-add';
import { AdminViewPage } from '../admin-view/admin-view';
import { AdminAnnouncementsPage } from '../admin-announcements/admin-announcements';
import { AdminDeletePage } from '../admin-delete/admin-delete';
import { AdminUpdatePage } from '../admin-update/admin-update';
import { AdminMessagesPage } from '../admin-messages/admin-messages';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  gotoAdminAdd()
  {
      this.navCtrl.push(AdminAddPage);
  }

  gotoAdminView()
  {
    this.navCtrl.push(AdminViewPage);  
  }
  gotoAdminAnnounces()
  {
    this.navCtrl.push(AdminAnnouncementsPage);
  }
  gotoAdminDelete()
  {
    this.navCtrl.push(AdminDeletePage);
  }
  gotoAdminUpdate()
  {
    this.navCtrl.push(AdminUpdatePage);
  }
  gotoAdminMessages()
  {
    this.navCtrl.push(AdminMessagesPage);
  }

}
