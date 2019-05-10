import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceStudentMessageProvider } from '../../providers/service-student-message/service-student-message';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { StudentMessage2Page } from '../student-message2/student-message2';

/**
 * Generated class for the StudentMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-student-message',
  templateUrl: 'student-message.html',
})
export class StudentMessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Service:ServiceStudentMessageProvider, public ServiceUser:ServiceLoginProvider) {

      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentMessagePage');
  }


  enablecontent(item)
  {
    console.log(item.MSG_ID);
    this.Service.updateStatus(item.MSG_ID);
    this.navCtrl.push(StudentMessage2Page,{item});
  }

}
