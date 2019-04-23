import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAnnouncementProvider } from '../../providers/service-announcement/service-announcement';
import { DeleteEditAnnouncementPage } from '../delete-edit-announcement/delete-edit-announcement';

/**
 * Generated class for the DeleteAnnouncementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-announcements',
  templateUrl: 'delete-announcements.html',
})
export class DeleteAnnouncementsPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public Service:ServiceAnnouncementProvider) {
   

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
