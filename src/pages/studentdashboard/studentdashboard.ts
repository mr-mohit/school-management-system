import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import {StudentProfilePage} from '../student-profile/student-profile';


/**
 * Generated class for the StudentdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentdashboard',
  templateUrl: 'studentdashboard.html',
})
export class StudentdashboardPage {


  tab1Root: any = HomePage;
tab2Root: any = StudentProfilePage;
  tab3Root: any = SettingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController ) {
    this.Menu.enable(true);
  }

}
