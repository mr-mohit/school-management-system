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
 public timetableData:any=
 {
   "CLASSID":"",
   "SUBJECTID":"",
   "SLOT":""
 };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service:ServiceGetClassMasterProvider,
              public addtimetable:ServiceAddTimetableProvider,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimetablePage');
  }

  submitTimetable(CLASSID,SUBJECTID,SLOT)
  {
    if(CLASSID!=undefined && SUBJECTID!=undefined && SLOT!=undefined)
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
                          this.CLASSID=CLASSID;
                          this.SUBJECTID=SUBJECTID;
                          this.SLOT=SLOT;
                          this.timetableData['CLASSID']= this.CLASSID;
                          this.timetableData['SUBJECTID']=this.SUBJECTID;
                          this.timetableData['SLOT']= this.SLOT;
                          console.log("sending data",this.timetableData);
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
      alert("plese fill required fields");
    }

  }

}
