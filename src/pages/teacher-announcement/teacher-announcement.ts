import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAnnouncementProvider } from '../../providers/service-announcement/service-announcement';
import { AnnouncementDetailsPage } from '../announcement-details/announcement-details';

/**
 * Generated class for the TeacherAnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-announcement',
  templateUrl: 'teacher-announcement.html',
})
export class TeacherAnnouncementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Service:ServiceAnnouncementProvider) {
       this.Service.getData();

       }
       enablecontent(item)
       {
         
        this.navCtrl.push(AnnouncementDetailsPage,{item});
       }
  
    }


    
