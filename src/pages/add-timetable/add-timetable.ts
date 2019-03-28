import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the AddTimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-timetable',
  templateUrl: 'add-timetable.html',
})
export class AddTimetablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service:ServiceGetClassMasterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimetablePage');
  }

}
