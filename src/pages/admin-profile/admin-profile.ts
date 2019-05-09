import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';

/**
 * Generated class for the AdminProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})

export class AdminProfilePage {

  public imgurl:String="assets/imgs/defuser.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceLoginProvider) {
     
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProfilePage');
   
   if(this.service.Uimag!=undefined)
   {
     this.imgurl=this.service.Uimag;
     console.log("USER PIC ",this.imgurl);
   }
  }

}
