import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { ProfilePage } from '../profile/profile';

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
  tab2Root: any = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
