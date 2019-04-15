import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateAnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-announcement',
  templateUrl: 'update-announcement.html',
})
export class UpdateAnnouncementPage {
  public CATEGORY:any;
  public TITLE:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateAnnouncementPage');
    this.CATEGORY=this.navParams.get("CATEGORY");
    this.TITLE=this.navParams.get("TITLE");

    console.log(this.CATEGORY);
    console.log(this.TITLE);

  }


}
