import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAdduserProvider } from '../../providers/service-adduser/service-adduser';

/**
 * Generated class for the UserAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-address',
  templateUrl: 'user-address.html',
})
export class UserAddressPage {
  private Fname:any;
  private AddressType:any;
  private AddressOne:any;
  private AddressTwo:any;
  private State:any;
  private Pincode:any;
  private City:any;
  private Contact:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public addapi:ServiceAdduserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddressPage');
  }
 AddUserAddress()
 {
   this.addapi.$Fname=this.Fname;
   this.addapi.$AddressType=this.AddressType;
   this.addapi.$AddressOne=this.AddressOne;
   this.addapi.$AddressTwo=this.AddressTwo;
   this.addapi.$State=this.State;
   this.addapi.$Pincode=this.Pincode;
   this.addapi.$City=this.City;
   this.addapi.$Contact=this.Contact;


  
  console.log( this.addapi.$role);
  console.log(this.addapi.$name);
  console.log(this.addapi.$gender);
  console.log(this.addapi.$dob);
  console.log(this.addapi.$email);
  console.log(this.addapi.$username);
  console.log(this.addapi.$password);
  console.log(this.addapi.$Fname);
  console.log(this.addapi.$AddressType);
  console.log(this.addapi.$AddressOne);
  console.log(this.addapi.$AddressTwo);
  console.log(this.addapi.$State);
  console.log(this.addapi.$Pincode);
  console.log(this.addapi.$City)
  console.log(this.addapi.$Contact);
   
 }
}
