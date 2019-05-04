import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceAdminAnnouncements } from '../../providers/service-AdminAnnoucement/service-announcement';
import { DeleteAnnouncementsPage } from '../delete-announcements/delete-announcements';

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

private Date=new Date().getDate();
private Month=new Date().getMonth()+1;
private Year=new Date().getFullYear();
private timestarts:any;
private timeEnds:any;
private category:any;
private AnnouncementsTitle:any;
private AnnouncementsDescription:any;

public Announcement={
  "REG_NO":"",
  "category":"",
  "AnnouncementsTitle":"",
  "AnnouncementsDescription":"",
  "timestarts":"",
  "timeEnds":""
};

  constructor(public navCtrl: NavController, public navParams: NavParams,public getuserid:ServiceLoginProvider,public AdminAnnouncements:ServiceAdminAnnouncements,public alertCtrl:AlertController) {
    this.timestarts=this.Date+"-"+this.Month+"-"+this.Year;
    this.timeEnds=this.Date+"-"+this.Month+"-"+this.Year;
    console.log(this.timestarts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAnnouncementsPage');
    // console.log(this.date);
   
  }

  Announcements()
  {
    if(this.category!=undefined && this.AnnouncementsTitle!=undefined && this.AnnouncementsDescription!=undefined)
    {
  
         const confirm=this.alertCtrl.create({
          title:'Publish Announcement?',
          buttons:[
            {
              text:'Yes',
              handler:()=>
              {
       this.Announcement['REG_NO']=this.getuserid.recdata.data[0].REG_NO;
       this.Announcement['category']=this.category;
       this.Announcement['AnnouncementsTitle']=this.AnnouncementsTitle;
       this.Announcement['AnnouncementsDescription']=this.AnnouncementsDescription;
       this.Announcement['timestarts']=this.timestarts;
       this.Announcement['timeEnds']=this.timeEnds;
       if(this.AdminAnnouncements.postAnnouncements(this.Announcement))
       {
            this.navCtrl.pop();
       }
      }
            },
            {
              text:'No',
              handler:()=>
              {

              }
            }
          ]


         });
         confirm.present();
    }
    else
    {
    
       alert("Fields cannot be empty");
    }
  }
  SeeAnnouncements()
  {
    this.navCtrl.push(DeleteAnnouncementsPage);
  }
  getCurrent()
  {
    return this.Year=new Date().getFullYear();
    console.log("This Year",this.Year);
  }
}
