import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewUserPage } from '../view-user/view-user';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminViewPage');
  }

  // view user 
  ViewUser()
  {
      this.navCtrl.push(ViewUserPage);
  }

}
