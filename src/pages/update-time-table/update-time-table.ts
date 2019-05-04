import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceDeleteAndUpdateTimeTableProvider } from '../../providers/Service-delete-and-update-time-table/Service-delete-and-update-time-table';

/**
 * Generated class for the UpdateTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-time-table',
  templateUrl: 'update-time-table.html',
})
export class UpdateTimeTablePage {
  public CLASSID:any;
  public SUBJECTID:any;
  public SLOT:any;
  public Day:any;
  public status:boolean=false;


  public timetableData:any=
  {
    "CLASSID":"",
    "SUBJECTID":"",
    "SLOT":"",
    "DAY":""
  };


  public fetchTimetableData:any=
  {
    "CLASSID":"",
    "DAY":""
  };

  private Days:any=[
    {Day:"Monday"},
    {Day:"Tuesday"},
    {Day:"Wednesday"},
    {Day:"Thursday"},
    {Day:"Friday"},
    {Day:"Saturday"},
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service:ServiceGetClassMasterProvider,
    public getSubjects:ServiceDeleteAndUpdateTimeTableProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateTimeTablePage');
    this.service.getClassFun();
    this.Days;
  }


  getSubject(Class)
  {
    this.CLASSID=Class;
    this.service.getAttOnTimeSubject(Class);
  }

  getCurrentTimeTable(Day)
  { 
       this.status=true; //enable view of current timetable

      this.fetchTimetableData['CLASSID']=this.CLASSID;
      this.fetchTimetableData['DAY']=Day;
      console.log("HERE ",this.fetchTimetableData)
   this.service.getCurrentTimeTable(this.fetchTimetableData)
  
  }


  UpdateTimeTable()
  {
     if(this.CLASSID!=undefined && this.Day!=undefined && this.SLOT!=undefined && this.SLOT!=undefined)
     {
      this.timetableData['CLASSID']=this.CLASSID;
      this.timetableData['SUBJECTID']=this.SUBJECTID;
      this.timetableData['SLOT']=this.SLOT;
      this.timetableData['DAY']=this.Day;
      console.log("",this.timetableData);
      if(this.getSubjects.getUpdateData(this.timetableData))
      {
        this.navCtrl.pop();
      }
     }
     else
     {
        alert("Please select all the fields");
     }
  }

}
