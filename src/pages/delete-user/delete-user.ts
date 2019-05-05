import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceViewUserProvider } from '../../providers/service-view-user/service-view-user';
import { ServiceDeleteUserProvider } from '../../providers/service-delete-user/service-delete-user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DeleteUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-delete-user',
  templateUrl: 'delete-user.html',
})
export class DeleteUserPage {

  slideOneForm: FormGroup;

  userInfos =
  {
     "userRegNo":"",
     "userrole":"",
  }

  constructor(public navCtrl: NavController,public alertctrl:AlertController, 
              public navParams: NavParams,public formBuilder: FormBuilder,
              public service:ServiceViewUserProvider,public serviceDel:ServiceDeleteUserProvider) {

    // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
       userid: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6,9}')])],    
    });
    this.service.recdata = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteUserPage');
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
        alert("Enter a valid User Id");
      }  
  }

  //Delete User
  DeleteUser()
  {

    if(this.slideOneForm.controls.userid.valid)
    {
        this.userInfos['userRegNo'] = this.slideOneForm.getRawValue().userid;
        this.userInfos['userrole'] = this.service.recdata.data[0].ROLE;
        const confirm = this.alertctrl.create({
          title: 'Delete User?',
          message: 'Do you really want to delete this User?',
          buttons: [
            {
              text: 'Cancel',
              handler: () => {
                              this.navCtrl.pop();
                            }
            },
            {
            text: 'Okay',
            handler: () =>
              {
                    this.serviceDel.postUserID(this.userInfos);
                    this.navCtrl.pop();
                    
              }
            }
        ]
      });
      confirm.present();   
    }
    else{
      alert("Please fill the required fields");
    }

  }
}
