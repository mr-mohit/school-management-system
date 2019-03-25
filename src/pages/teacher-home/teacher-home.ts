import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { TeacherAnnouncementPage } from '../teacher-announcement/teacher-announcement';

/**
 * Generated class for the TeacherHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController,) {
    this.Menu.enable(true);
   
    
  }

  //Announces Function
  gotoTeacherAnnounces()
  {
    this.navCtrl.push(TeacherAnnouncementPage);
  }

}
