import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceAdduserProvider } from '../../providers/service-adduser/service-adduser';
import { UserAddressPage } from '../user-address/user-address';
/**
 * Generated class for the AddUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-users',
  templateUrl: 'add-users.html',
})
export class AddUsersPage {
  private role:any;
  private name:any;
  private gender:any;
  private dob:any;
  private email:any;
  private username:any;
  private password:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public addapi:ServiceAdduserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUsersPage');
  }
  getUserAddress()
  {
    //setting the variables to service variables
    this.addapi.$role=this.role;
    this.addapi.$name=this.name;
    this.addapi.$gender=this.gender;
    this.addapi.$dob=this.dob;
    this.addapi.$email=this.email;
    this.addapi.$username=this.username;
    this.addapi.$password=this.password;
    this.navCtrl.push(UserAddressPage);
  }
}
