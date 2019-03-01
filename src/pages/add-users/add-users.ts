import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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



  @ViewChild('signupSlider') signupSlider: any;


  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
    // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
      userid: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      userpic: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      userrole: [''],
      userdob: [''],
      usergender: [''],
     
    });
    // this slide is used to enter basics infos of the user
    this.slideTwoForm = formBuilder.group({
      useremail: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      userpassword: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,35}$'), Validators.required])],
      userpassword2: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,35}$'), Validators.required])],
      useractive: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      userfathername: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usermothername: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
     
    });

    // this slide is used to enter infos address of the user
    this.slideThreeForm = formBuilder.group({
        addressType: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address1: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address2: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        state: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pincode: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[0-9]).{6}')])],
        contact: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]  
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUsersPage');
  }
  // getUserAddress()
  // {
  //   this.navCtrl.push(UserAddressPage);
  // }

  next(){
    this.signupSlider.slideNext();
    }

    prev(){
        this.signupSlider.slidePrev();
    }


  save()
  {
    console.log(this.slideOneForm.getRawValue());
    console.log(this.slideTwoForm.getRawValue());
    console.log(this.slideThreeForm.getRawValue());
  }
}
