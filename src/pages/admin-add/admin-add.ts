import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUsersPage } from '../add-users/add-users';
import { AddSubjectsPage } from '../add-subjects/add-subjects';
import { AddSessionPage } from '../add-session/add-session';
import { ServiceViewSessionProvider } from '../../providers/service-view-session/service-view-session';
import { AddTermPage } from '../add-term/add-term';
import { AddClassPage } from '../add-class/add-class';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';



@IonicPage()
@Component({
  selector: 'page-admin-add',
  templateUrl: 'admin-add.html',
})
export class AdminAddPage{

  constructor(public navCtrl: NavController, public navParams: NavParams,public getSession:ServiceViewSessionProvider,public cid:ServiceGetClassMasterProvider) {
  
  }

  AddUser()    //this function will open Addusers page and load all the classes so they can be used to set class for student
  {
    this.navCtrl.push(AddUsersPage);
    this.cid.getClassFun();   //this will call the function of ServiceGetClassMaster through cid object of same service
  }
  AddSubject()
  {
        this.navCtrl.push(AddSubjectsPage);
  }
  AddClass()
  {
     this.navCtrl.push(AddClassPage)
  }
  AddTimeTable()
  {

  }
  AddSession()
  {
   this.navCtrl.push(AddSessionPage);
  }
  AddTerm()
  {
    let Dataobj:any;
    this.getSession.getSessionFun().then(data=>{
   
      Dataobj=data;
      console.log("load data",Dataobj);
      this.navCtrl.push(AddTermPage,{"datavalue":Dataobj});

    });
   
  }


}
