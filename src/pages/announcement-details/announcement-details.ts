import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnouncementDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-announcement-details',
  templateUrl: 'announcement-details.html',
})
export class AnnouncementDetailsPage {
  public value:any;
  public A_ID:any;
  public CATEGORY:any;
  public TITLE:any;
  public DESCRIPTION:any;
  public START_TIME:any;
  public END_TIME:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.value = navParams.get('item');

    this.CATEGORY=this.value.CATEGORY;
    this.TITLE=this.value.TITLE;
    this.DESCRIPTION=this.value.DESCRIPTION;
    this.START_TIME=this.value.START_TIME;
    this.END_TIME=this.value.END_TIME;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementDetailsPage');
  }

}
