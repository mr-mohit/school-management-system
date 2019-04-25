import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceGetTeacherProvider } from '../../providers/service-get-teacher/service-get-teacher';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';



@IonicPage()
@Component({
  selector: 'page-teacher-time-table',
  templateUrl: 'teacher-time-table.html',
})
export class TeacherTimeTablePage {

  private Current_Reg_No:any;
  private AssignedSub:any;
  private Day:any;
  public status:boolean=false;

  private Days:any=[
    {Day:"mon"},
    {Day:"tues"},
    {Day:"wed"},
    {Day:"thu"},
    {Day:"fri"},
    {Day:"sat"},
 ];

 private TimeElement:any={
  "Sub_Id":"",
  "Day":""
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public getTeacherTime:ServiceGetTeacherProvider,
    public getuserid:ServiceLoginProvider,
    public toast:ToastController) {
      this.Days;
      this.status=false;
  }

  ionViewDidLoad() {
   console.log("",this.Current_Reg_No=this.getuserid.recdata.data[0].REG_NO);
    console.log('ionViewDidLoad TeacherTimeTablePage');
     this.getTeacherTime.getTeacherSubject(this.Current_Reg_No);
  }

  getTimeTable()
  {
    this.status=true;

    if(this.Day!=undefined && this.AssignedSub!=undefined)
    {
    this.TimeElement['Sub_Id']=this.AssignedSub;
    this.TimeElement['Day']=this.Day;
    console.log("Data Sent ",this.TimeElement);
    this.getTeacherTime.getTeacherTimeTable(this.TimeElement);
    }
    else
    {
      this.status=false;

      const toast = this.toast.create({
        message: 'Please Select The Subject And Day',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

}
