import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceAddTimetableProvider } from '../../providers/service-add-timetable/service-add-timetable';

/**
 * Generated class for the AddTimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-timetable',
  templateUrl: 'add-timetable.html',
})
export class AddTimetablePage {
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

 public getSlot:any={
   "CLASSID":"",
   "DAY":""
 }

 private Days:any=[
   {Day:"mon"},
   {Day:"tues"},
   {Day:"wed"},
   {Day:"thu"},
   {Day:"fri"},
   {Day:"sat"},
];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service:ServiceGetClassMasterProvider,
              public addtimetable:ServiceAddTimetableProvider,
              public alertCtrl:AlertController,
              public GU :ServiceGetClassMasterProvider) {
               //TO hide Time Table View
               this.status=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimetablePage');
    console.log(this.Days);
  }

  submitTimetable()
  {
    if(this.CLASSID!=undefined && this.SUBJECTID!=undefined && this.SLOT!=undefined && this.Day!=undefined)
    {
      const confirm = this.alertCtrl.create({
        title: 'Save Time-table?',
        message: 'Do you want to save this Time-table?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
                            this.navCtrl.pop();
                           }
          },
          {
           text: 'Okay',
           handler: () => {
                          this.CLASSID=this.CLASSID;
                          this.SUBJECTID=this.SUBJECTID;
                          this.SLOT=this.SLOT;
                          this.Day=this.Day;
                          this.timetableData['CLASSID']= this.CLASSID;
                          this.timetableData['SUBJECTID']=this.SUBJECTID;
                          this.timetableData['SLOT']= this.SLOT;
                          this.timetableData['DAY']=this.Day;
                          console.log("Sending Time Table -->",this.timetableData);
                          if(this.addtimetable.addtimetableFun(this.timetableData))
                          {
                            this.navCtrl.pop();
                          }
                          }
          }
      ]
    });
    confirm.present();

    }
    else{

      console.log("CLASS ID ",this.CLASSID);
      console.log("SUBJECT ID ",this.SUBJECTID);
      console.log("SLOT ",this.SLOT);
      console.log("DAY",this.Day);
      alert("Please fill the required fields");
    }

  }



  getSubject(Class)
  {
    
//console.log(this.postId['classId']);
      this.CLASSID=Class;
    this.GU.getAttOnTimeSubject(Class);
  }

  //For Fetching Time Table of selected Class and day
  getCurrentTimeTable(Day)
  { 
      this.status=true; //enable view of current timetable

      this.fetchTimetableData['CLASSID']=this.CLASSID;
      this.fetchTimetableData['DAY']=Day;
      console.log("HERE ",this.fetchTimetableData)

     this.GU.getCurrentTimeTable(this.fetchTimetableData)
     
      this.GU.getSlot(this.fetchTimetableData);
  
  }

  // getTimeSlot()
  // {
  //   if(this.CLASSID!=undefined && this.Day)
  //   {
  //     console.log("ID HERE : ",this.CLASSID);
  //     console.log("DAy HERE",this.Day);

  //     this.getSlot['CLASSID']=this.CLASSID;
  //     this.getSlot['DAY']=this.Day;

  //     this.GU.getSlot(this.getSlot);
  //   }
  //   else
  //   {
  //     alert("Please Select above First");
  //   }
  // }

}
