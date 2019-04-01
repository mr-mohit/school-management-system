import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAddStudentfeedbackProvider } from '../../providers/service-add-studentfeedback/service-add-studentfeedback';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { FeedbackDetailPage } from '../feedback-detail/feedback-detail';

@IonicPage()
@Component({
  selector: 'page-teacher-feedback',
  templateUrl: 'teacher-feedback.html',
})
export class TeacherFeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public getFeed:ServiceGetClassMasterProvider) {
                this.getFeed.getFeedbackFun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherFeedbackPage');
  }

  enablecontent(item)
  {
    this.navCtrl.push(FeedbackDetailPage,{item});
  }
}
