import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUpdateProvider } from '../../providers/service-update/service-update';

@IonicPage()
@Component({
  selector: 'page-update-session',
  templateUrl: 'update-session.html',
})
export class UpdateSessionPage {
  public SID:any;
  public START_DATE:any;
  public END_DATE:any;
  
public sessionData:any=
{
  "SID":"",
  "START_DATE":"",
  "END_DATE":" "
};
  constructor(public navCtrl: NavController, public navParams: NavParams,public SS:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public UC:ServiceUpdateProvider) {
  }
  Submit(SID,START_DATE,END_DATE)
  {
    if(SID!=undefined &&START_DATE!=undefined && END_DATE!=undefined)
    {
      const confirm = this.alertCtrl.create({
        title: 'Update session?',
        message: 'Do you want to update the session?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
                            this.navCtrl.pop();
                           }
          },
          {
           text: 'Okay',
           handler: () => {
                          console.log('Agree clicked');
                          this.SID=SID;
                          this.START_DATE=START_DATE;
                          this.END_DATE=END_DATE;
                          this.sessionData['SID']=this.SID;
                          this.sessionData['START_DATE']=this.START_DATE;
                          this.sessionData['END_DATE']=this.END_DATE;
                          if(this.UC.updateSessionFun(this.sessionData))
                          {
                            this.navCtrl.pop();
                          }
                          }
          }
      ]
    });
    confirm.present();

    }
    else{
      alert("Please fill the required fields");
    }
    
}
  
}
