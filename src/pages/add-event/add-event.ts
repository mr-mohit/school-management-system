import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceAddEventProvider } from '../../providers/service-add-event/service-add-event';
import * as moment from "moment"; 
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  myDate = moment().format("YYYY-MM-DD");
 public DATE:any;
 public EVENT:any;
 public eventData:any=
 {
   "DATE":"",
   "EVENT":""
 };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl:AlertController,
              public addEvent:ServiceAddEventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  submitEvent(DATE,EVENT) 
  {
    let Year=DATE.year;
    console.log("year is",Year);
    if(DATE!=undefined && EVENT!=undefined)
    {
      if(this.myDate<DATE)
      {
        const confirm = this.alertCtrl.create({
          title: 'Save Event?',
          message: 'Do you want to save this Event?',
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
                            this.DATE=DATE;
                            this.EVENT=EVENT;
  
                            this.eventData['DATE']= this.DATE;
                            this.eventData['EVENT']=this.EVENT;
                            console.log("sending data",this.eventData);
                            if(this.addEvent.addEventFun(this.eventData))
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
        alert("Event cannot be Added for previous or current date");
      }
     

    }
    else{
      alert("Please fill required fields");
    }

  }
}
