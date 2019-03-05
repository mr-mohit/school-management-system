import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminAnnouncementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-announcements',
  templateUrl: 'admin-announcements.html',
})
export class AdminAnnouncementsPage {

private date=new Date().toISOString();
private timestarts='00:00';
private timeEnds=new Date().toISOString();
private category:any;
private AnnouncementsTitle:any;
private AnnouncementsDescription:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAnnouncementsPage');
  }

  Announcements()
  {
    if(this.category!=undefined && this.AnnouncementsTitle!=undefined && this.AnnouncementsDescription!=undefined)
    {
      alert("Okay");

      //trying to remove not used warning by using them
      console.log(this.date);
      console.log(this.timestarts);
      console.log(this.timeEnds);
    }
    else
    {
    
       alert("Not Okay");
    }
  }
}
