import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceViewUserProvider } from '../../providers/service-view-user/service-view-user';

/**
 * Generated class for the ViewUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-user',
  templateUrl: 'view-user.html',
})
export class ViewUserPage {

  @ViewChild('signupSlider') signupSlider: any;


  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;
  submitAttempt: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, public service:ServiceViewUserProvider) {

                // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
      userid: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6,9}')])],
         
    });
    this.slideTwoForm = formBuilder.group({
         
    });
    this.slideThreeForm = formBuilder.group({
         
    });
    this.service.recdata = null;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewUserPage');
  }
 // next slide
  next(){
    this.signupSlider.slideNext();
    }
// precedent slide
    prev(){
        this.signupSlider.slidePrev();
    }

//get user infos
UserInfos()
{
   
  if(this.slideOneForm.valid)
  {
    // here we send the reg_No
    this.service.postUserID(this.slideOneForm.getRawValue().userid);
  }
  else
  {
    alert("enter a valid Registration ID");
  }  
}

}
