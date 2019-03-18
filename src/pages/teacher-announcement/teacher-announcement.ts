import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAnnouncementProvider } from '../../providers/service-announcement/service-announcement';

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

  public status:any;
  public count=0;


  constructor(public navCtrl: NavController, public navParams: NavParams,public Service:ServiceAnnouncementProvider) {
       this.Service.getData();
  
    }
    
    enablecontent(item)
    {
      this.count=this.count+1;
      if(this.count%2!=0)
      {
        this.status=true;
      }
      else
      {
         this.status=false;
      }
    }

    // acceptedbuttonclicked(item)
    // {
    //   item.optiondiv=false;
    //   item.optionvalue=true;
    //   item.optiontext="Accepted";
        
    // }
    // rejectedbuttonclicked(item)
    // {
    //   item.optiondiv=false;
    //   item.optionvalue=true;
    //   item.optiontext="Rejected";
        
    // }
    
  }