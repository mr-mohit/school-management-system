import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAnnouncementProvider } from '../../providers/service-announcement/service-announcement';

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
  public A_ID:any;
  public CATEGORY:any;
  public TITLE:any;
  public DESCRIPTION:any;
  public START_TIME:any;
  public END_TIME:any;
 

  public UpdateData={
  "A_ID":"",
  "CATEGORY":"",
  "TITLE":"",
  "DESCRIPTION":"",
  "START_TIME":"",
  "END_TIME":""
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,public Service:ServiceAnnouncementProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateAnnouncementPage');

    this.A_ID=this.navParams.get("A_ID");
    this.CATEGORY=this.navParams.get("CATEGORY");
    this.TITLE=this.navParams.get("TITLE");
    this.DESCRIPTION=this.navParams.get("DESCRIPTION");
    this.START_TIME=this.navParams.get("START_TIME");
    this.END_TIME=this.navParams.get("END_TIME");
  

    console.log(this.A_ID);
    console.log(this.CATEGORY);
    console.log(this.TITLE);
    console.log(this.DESCRIPTION);
    console.log(this.START_TIME);
    console.log(this.END_TIME);
  }

  UpdateAnnouncements()
  {
    if(this.CATEGORY!=undefined && this.TITLE!=undefined
      && this.DESCRIPTION!=undefined && this.START_TIME!=undefined
      && this.END_TIME!=undefined)
      {
       this.UpdateData['A_ID']=this.A_ID;
       this.UpdateData['CATEGORY']=this.CATEGORY;
       this.UpdateData['TITLE']=this.TITLE;
       this.UpdateData['DESCRIPTION']=this.DESCRIPTION;
       this.UpdateData['START_TIME']=this.START_TIME;
       this.UpdateData['END_TIME']=this.END_TIME;
       if(this.Service.getUpdateData(this.UpdateData))
       {
         this.navCtrl.pop();
       }
      }
     else
      {

      }
  }


}
