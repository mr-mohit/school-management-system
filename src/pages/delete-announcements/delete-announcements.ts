import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAnnouncementProvider } from '../../providers/service-announcement/service-announcement';
import { DeleteEditAnnouncementPage } from '../delete-edit-announcement/delete-edit-announcement';
import * as moment from "moment"; 


@IonicPage()
@Component({
  selector: 'page-delete-announcements',
  templateUrl: 'delete-announcements.html',
})
export class DeleteAnnouncementsPage {
  myDate = moment().format("YYYY-MM-DD");

  constructor(public navCtrl: NavController, public navParams: NavParams,public Service:ServiceAnnouncementProvider) {
   
    console.log("date is",this.myDate);

    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad DeleteAnnouncementsPage');
      this.Service.getData();
      console.log("Service here",this.Service.data);
      console.log("STATUS",this.Service.status);
    }

    enablecontent(item)
    {
      
     this.navCtrl.push(DeleteEditAnnouncementPage,{item});
    }

 

}
