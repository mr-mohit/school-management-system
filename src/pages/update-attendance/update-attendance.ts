import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUploadAttendenceProvider } from '../../providers/service-upload-attendence/service-upload-attendence';


@IonicPage()
@Component({
  selector: 'page-update-attendance',
  templateUrl: 'update-attendance.html',
})
export class UpdateAttendancePage {
  public AA:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public Update:ServiceUploadAttendenceProvider) {

    this.GU.class=this.navParams.get('class');
    this.GU.subject=this.navParams.get('subject');
    this.GU.date=this.navParams.get('date');    
    this.GU.slot=this.navParams.get('slot');    
    this.AA=this.GU.attendence;
    console.log(this.AA,'array aa gya');
  }

  Submit(reg,status,index)
  {

    let  details:any={

      "REG_NO":"",
      "class":"",
      "subject":"",
      "date":"",
      "slot":"",
      "status":""
    };
    details['REG_NO']=reg;
    details['class']=this.GU.class;
    details['subject']=this.GU.subject;
    details['date']=this.GU.date;
    details['slot']=this.GU.slot;
    details['status']=status;
    if(status!=undefined)
    {
      
      details['status']="A";

    }
    else{
      details['status']="P";
    }
    this.AA[index] = details;
    console.log("Updation wala copy",this.AA);
  }
   

  ViewAtt(){
    const confirm = this.alertCtrl.create({
      title: 'Update Attendance?',
      message: 'Do you want to Update Attendance?',
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
                          this.Update.updateAttFun(this.AA);
                          this.navCtrl.pop();
                        }
        }
      ]
    });
    confirm.present();
  }


}
