import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceAdminAnnouncements } from '../../providers/service-AdminAnnoucement/service-announcement';

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

public Announcement:any={
  "REG_NO":"",
  "category":"",
  "AnnouncementsTitle":"",
  "AnnouncementsDescription":"",
  "timestarts":"",
  "timeEnds":""
};

  constructor(public navCtrl: NavController, public navParams: NavParams,public getuserid:ServiceLoginProvider,public AdminAnnouncements:ServiceAdminAnnouncements) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAnnouncementsPage');
    // console.log(this.date);
    this.date;
  }

  Announcements()
  {
    if(this.category!=undefined && this.AnnouncementsTitle!=undefined && this.AnnouncementsDescription!=undefined)
    {
  
     
     
      this.Announcement['REG_NO']=this.getuserid.details.REG_NO;
       this.Announcement['category']=this.category;
       this.Announcement['AnnouncementsTitle']=this.AnnouncementsTitle;
       this.Announcement['AnnouncementsDescription']=this.AnnouncementsDescription;
       this.Announcement['timestarts']=this.timestarts;
       this.Announcement['timeEnds']=this.timeEnds;
       this.AdminAnnouncements.postAnnouncements(this.Announcement);
      
     
    }
    else
    {
    
       alert("Fields cannot be empty");
    }
  }
}
