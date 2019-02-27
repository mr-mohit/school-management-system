import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherHomePage } from '../teacher-home/teacher-home';

import { SettingPage } from '../setting/setting';
import {TeacherProfilePage} from '../teacher-profile/teacher-profile';

/**
 * Generated class for the TeacherdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherdashboard',
  templateUrl: 'teacherdashboard.html',
})
export class TeacherdashboardPage {

  tab1Root: any = TeacherHomePage;
tab2Root: any = TeacherProfilePage;
  tab3Root: any = SettingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
