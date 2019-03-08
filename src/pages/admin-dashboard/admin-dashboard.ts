import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { SettingPage } from '../setting/setting';
import { AdminProfilePage } from '../admin-profile/admin-profile';

/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboardPage {

  tab1Root: any = AdminHomePage;
  tab2Root: any = AdminProfilePage;
  tab3Root: any = SettingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu:MenuController) {
    this.Menu.enable(true);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboardPage');
  }

}
