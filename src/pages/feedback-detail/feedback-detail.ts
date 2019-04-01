import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feedback-detail',
  templateUrl: 'feedback-detail.html',
})
export class FeedbackDetailPage {
  public value:any;
  public SUBJECT:any;
  public DESCRIPTION:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value=navParams.get('item');
    this.SUBJECT=this.value.SUBJECT;
    this.DESCRIPTION=this.value.DESCRIPTION;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackDetailPage');
  }

}
