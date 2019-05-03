import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUsersPage } from '../add-users/add-users';
import { AddSubjectsPage } from '../add-subjects/add-subjects';
import { AddSessionPage } from '../add-session/add-session';
import { ServiceViewSessionProvider } from '../../providers/service-view-session/service-view-session';
import { AddTermPage } from '../add-term/add-term';
import { AddClassPage } from '../add-class/add-class';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { AddTimetablePage } from '../add-timetable/add-timetable';
import { AddEventPage } from '../add-event/add-event';



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
    this.getSession.getSessionFun(); //
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
     this.navCtrl.push(AddTimetablePage);
     this.cid.getClassFun();
     this.cid.getSubjectFun();
  }
  AddSession()
  {
   this.navCtrl.push(AddSessionPage);
  }
  AddTerm()
  {
    // let Dataobj:any;
    // this.getSession.getSessionFun().then(data=>{
   
    //   Dataobj=data;
    //   console.log("load data",Dataobj);
    //   this.navCtrl.push(AddTermPage,{"datavalue":Dataobj});
    // });
    this.getSession.getSessionFun();
    this.navCtrl.push(AddTermPage);
  }
  AddEvent()
  {
    this.navCtrl.push(AddEventPage);
  }


}
