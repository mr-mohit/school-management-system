import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUsersPage } from '../add-users/add-users';
import { AddSubjectsPage } from '../add-subjects/add-subjects';

/**
 * Generated class for the AdminAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-add',
  templateUrl: 'admin-add.html',
})
export class AdminAddPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  AddUser()
  {
    this.navCtrl.push(AddUsersPage);
  }
  AddSubject()
  {
        this.navCtrl.push(AddSubjectsPage);
  }
  AddClass()
  {

  }
  AddTimeTable()
  {

  }
  AddSession()
  {

  }

}
