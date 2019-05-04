import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceDeleteSessionProvider } from '../../providers/service-delete-session/service-delete-session';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

@IonicPage()
@Component({
  selector: 'page-delete-session',
  templateUrl: 'delete-session.html',
})
export class DeleteSessionPage {
  public SESSION:any;
  public SD:any=
 {
   "SESSION":""
 };

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertctrl:AlertController,public cid:ServiceGetClassMasterProvider,
    public delSession:ServiceDeleteSessionProvider) {
  }

  deleteSession(SESSION) 
  {
    if(SESSION!=undefined)
    {
      const confirm = this.alertctrl.create({
        title: 'Delete this Session?',
        message: 'Do you really want to delete this Session?',
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
                          this.SESSION=SESSION;
                          this.SD['SESSION']= this.SESSION;
                          console.log("sending SESSION ID",this.SD);
                          if(this.delSession.deleteSessionFun(this.SD))
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
