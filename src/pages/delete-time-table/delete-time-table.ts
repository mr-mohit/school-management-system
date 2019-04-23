import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDeleteTimetableProvider } from '../../providers/service-delete-timetable/service-delete-timetable';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceDeleteAndUpdateTimeTableProvider } from '../../providers/Service-delete-and-update-time-table/Service-delete-and-update-time-table';

/**
 * Generated class for the DeleteTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-time-table',
  templateUrl: 'delete-time-table.html',
})
export class DeleteTimeTablePage {

  public CLASSID:any;
  public SUBJECTID:any;
  public SLOT:any;
  public Day:any;
  public status:boolean=false;

  public deleteData:any=
  {
    "CLASSID":"",
    "DAY":"",
    "SUBJECT":"",
     "SLOT":""
  }

  public fetchTimetableData:any=
 {
   "CLASSID":"",
   "DAY":""
 };

  private Days:any=[
    {Day:"mon"},
    {Day:"tues"},
    {Day:"wed"},
    {Day:"thu"},
    {Day:"fri"},
    {Day:"sat"},
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public DeleteService:ServiceDeleteTimetableProvider
    ,public service:ServiceGetClassMasterProvider,
    public getSubjects:ServiceDeleteAndUpdateTimeTableProvider) {
      this.Days;
      this.status=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteTimeTablePage');
    this.service.getClassFun();

  }

  getTime(CLASSID)
  {
    console.log("",CLASSID);
    this.DeleteService.getDeletetimetableData(CLASSID);
  }


  getSubject(Class)
  {
    
//console.log(this.postId['classId']);
      this.CLASSID=Class;
    this.getSubjects.getSubjectsToDelete(this.CLASSID);
  }

  getCurrentTimeTable(Day)
  { 
       this.status=true; //enable view of current timetable

      this.fetchTimetableData['CLASSID']=this.CLASSID;
      this.fetchTimetableData['DAY']=Day;
      console.log("HERE ",this.fetchTimetableData)
   this.service.getCurrentTimeTable(this.fetchTimetableData)
  
  }
  DeleteTimeTable()
  {
    if(this.CLASSID!=undefined && this.Day!=undefined &&
      this.SUBJECTID!=undefined && this.SLOT)
      {
       
        this.deleteData['CLASSID']=this.CLASSID;
        this.deleteData['DAY']=this.Day;
        this.deleteData['SUBJECT']=this.SUBJECTID;
        this.deleteData['SLOT']=this.SLOT;
        console.log("DELETE DATA",this.deleteData);

        if(this.DeleteService.getDeletetimetableData(this.deleteData))
        {
         this.navCtrl.pop();
        }
      }
      else
      {

      }

  }

}
