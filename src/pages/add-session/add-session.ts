import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the AddSessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-session',
  templateUrl: 'add-session.html',
})
export class AddSessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSessionPage');
  }
  
  Submit(START_DATE,END_DATE)
      {
        if(START_DATE!=undefined && END_DATE!=undefined)
        {
          const confirm = this.alertCtrl.create({
            title: 'Save Session',
            message: 'Do you want to save this Session',
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
                              }
              }
          ]
        });
        confirm.present();

        }
        else{
          alert("plese fill required fields");
        }
        
  }
  }
