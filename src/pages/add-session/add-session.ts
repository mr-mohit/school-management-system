import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ServiceAddSessionProvider } from '../../providers/service-add-session/service-add-session';


@IonicPage()
@Component({
  selector: 'page-add-session',
  templateUrl: 'add-session.html',
})
export class AddSessionPage {
  public START_DATE:any;
  public END_DATE:any;
  
public sessionData:any=
{
  "START_DATE":"",
  "END_DATE":" "
};

  constructor(public navCtrl: NavController,public addSession: ServiceAddSessionProvider,public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSessionPage');
  }
  
  Submit(START_DATE,END_DATE)
      {
        if(START_DATE!=undefined && END_DATE!=undefined )
        {
          if(START_DATE<END_DATE)
          {
            const confirm = this.alertCtrl.create({
              title: 'Save Session?',
              message: 'Do you want to save the Session?',
              buttons: [
                {
                  text: 'Cancel',
                  handler: () => {
                                  this.navCtrl.pop();
                                 }
                },
                {
                 text: 'Okey',
                 handler: () => {
                                console.log('Agree clicked');
                                this.START_DATE=START_DATE;
                                this.END_DATE=END_DATE;
                                this.sessionData['START_DATE']=this.START_DATE;
                                this.sessionData['END_DATE']=this.END_DATE;
                                //console.log("sending data",this.sessionData);
                                if(this.addSession.addSessionFun(this.sessionData))
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
            alert("End Date can't be before Start Date / or same as Start Date");
          }
          

        }
        else{
          alert("plese fill required fields");
        }
        
  }
  }
