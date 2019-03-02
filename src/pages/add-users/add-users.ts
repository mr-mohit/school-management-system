import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceAdduserProvider } from '../../providers/service-adduser/service-adduser';


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

  @ViewChild('signupSlider') signupSlider: any;


  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;

  submitAttempt: boolean = false;

  userInfos =
  {
     "userpic":"",
     "username":"",
     "userrole":"",
     "userdob":"",
     "usergender":"",
     "useremail":"",
     "userpassword":"",
     "userfathername":"",
     "usermothername":"",
     "useraddresstype":"",
     "useraddress1":"",
     "useraddress2":"",
     "userstate":"",
     "userpincode":"",
     "usercontact":"",

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public formBuilder: FormBuilder, public service:ServiceAdduserProvider) {
  
    // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
      userid: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userpic: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userrole: ['', Validators.compose([Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userdob: ['', Validators.compose([Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      usergender: ['', Validators.compose([Validators.pattern('[a-zA-Z ]+'), Validators.required])],
     
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
        addressType: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address1: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address2: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        state: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pincode: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6}')])],
        contact: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])]  
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
   //get the user id 
    getID()
    {
     console.log(this.slideOneForm.getRawValue().userrole);
      if(this.slideOneForm.getRawValue().userrole =="")
      {
         alert("please select one user role ");
      }
      else
      {
        this.service.getID(this.slideOneForm.getRawValue().userrole);
      }
    }

  save()
  {
   
     
   if(this.slideTwoForm.getRawValue().userpassword == this.slideTwoForm.getRawValue().userpassword2)
   {
      this.userInfos["userpic"] = this.slideOneForm.getRawValue().userpic;
      this.userInfos["username"] = this.slideOneForm.getRawValue().username;
      this.userInfos["userrole"] = this.slideOneForm.getRawValue().userrole;
      this.userInfos["userdob"] =  this.slideOneForm.getRawValue().userdob;
      this.userInfos["usergender"] =  this.slideOneForm.getRawValue().usergender;
      this.userInfos["useremail"] = this.slideTwoForm.getRawValue().useremail;
      this.userInfos["userpassword"] = this.slideTwoForm.getRawValue().userpassword;
      this.userInfos["userfathername"] =  this.slideTwoForm.getRawValue().userfathername;
      this.userInfos["usermothername"] =  this.slideTwoForm.getRawValue().usermothername;
      this.userInfos["useraddresstype"] =  this.slideThreeForm.getRawValue().addressType;
      this.userInfos["useraddress1"] =  this.slideThreeForm.getRawValue().address1;
      this.userInfos["useraddress2"] =  this.slideThreeForm.getRawValue().address2;
      this.userInfos["userstate"] =  this.slideThreeForm.getRawValue().state;
      this.userInfos["userpincode"] =  this.slideThreeForm.getRawValue().pincode;
      this.userInfos["usercontact"] =  this.slideThreeForm.getRawValue().contact;

       var a = 0;
      for(var index in this.userInfos) {

        //check if all the fields have been filled by the admin
        console.log(this.userInfos[index]);
        if(this.userInfos[index] == "")
        {
           // if one field is empty => print an alert 
            alert(" You should fill all the field / empty fields are not allowed");
            break;
        }
        else
        {
          a +=1 ; 
        }
      }
      // here we check if all the fields have been filled
      if(a == 15)
      {
        this.service.postuser(this.userInfos); // send the user infos to the provider 
      }
        
   }
   else{
      alert("password and confirmation password are not matching");
   }

  }
}
