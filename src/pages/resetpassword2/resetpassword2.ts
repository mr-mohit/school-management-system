import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceResetpasswordProvider } from '../../providers/service-resetpassword/service-resetpassword';
import { LoginPage } from '../login/login';

/**
 * Generated class for the Resetpassword2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-resetpassword2',
  templateUrl: 'resetpassword2.html',
})
export class Resetpassword2Page {
  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, public service:ServiceResetpasswordProvider) {

    // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
      OTP:  ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6,8}')])],
      newpassword: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,35}$'), Validators.required])],

     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Resetpassword2Page');
  }
  
  resetpassword()
  {
    if(this.slideOneForm.valid)
    {
      if(this.slideOneForm.getRawValue().OTP == this.service.recdata.data[0].OTP && this.slideOneForm.getRawValue().newpassword)
          {
              let datainfos=
              {
                regNo: this.service.recdata.data[0].USER_ID,
                newpassword: this.slideOneForm.getRawValue().newpassword,
                process:'2'
              }
              this.service.resetpassword(datainfos).then((data:any)=>{

                    if(data['statuscode']==1)
                    {
                      this.navCtrl.setRoot(LoginPage);
                    }
              }); // call the correct method 
        }
    }
    else
    {
      alert('Please fill all the fields properly, some of them are not valid');
    }
  
  }
}
