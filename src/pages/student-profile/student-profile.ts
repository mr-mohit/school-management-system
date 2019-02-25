import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';


/**
 * Generated class for the StudentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:ServiceLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentProfilePage');
  }

}
