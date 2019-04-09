import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetTeacherProvider } from '../../providers/service-get-teacher/service-get-teacher';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';

/**
 * Generated class for the TeacherTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-time-table',
  templateUrl: 'teacher-time-table.html',
})
export class TeacherTimeTablePage {

  public Current_Reg_No:any;

  private Days:any=[
    {Day:"Monday"},
    {Day:"Tuesday"},
    {Day:"Wednesday"},
    {Day:"Thursday"},
    {Day:"Friday"},
    {Day:"Saturday"},
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public getTeacherTime:ServiceGetTeacherProvider,
    public getuserid:ServiceLoginProvider) {
      this.Days;
  }

  ionViewDidLoad() {
   console.log("",this.Current_Reg_No=this.getuserid.recdata.data[0].REG_NO);

    console.log('ionViewDidLoad TeacherTimeTablePage');
     this.getTeacherTime.getTeacherTime(this.Current_Reg_No);
  }

  getTimeTable(Day)
  {
    console.log("Day",Day);
  }

}
