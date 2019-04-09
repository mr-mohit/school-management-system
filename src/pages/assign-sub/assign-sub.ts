import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetTeacherProvider } from '../../providers/service-get-teacher/service-get-teacher';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the AssignSubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-sub',
  templateUrl: 'assign-sub.html',
})
export class AssignSubPage {
   private Tea_REG_NO:any;
   private SubClass:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public GetTeacher:ServiceGetTeacherProvider,
    public GetClass:ServiceGetClassMasterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignSubPage');
    this.GetTeacher.getData();
    //Get Classes On Page load
    this.GetClass.getClassFun();

    console.log("NG HERE",this.SubClass);
    console.log("NG HERE",this.Tea_REG_NO);

  }

  getSubject(SubClass)
  {
    console.log(""+SubClass);
    this.SubClass=SubClass;
    this.GetClass.getAttOnTimeSubject(SubClass);
  }

}
