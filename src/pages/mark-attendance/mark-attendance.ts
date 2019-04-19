import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUploadAttendenceProvider } from '../../providers/service-upload-attendence/service-upload-attendence';


@IonicPage()
@Component({
  selector: 'page-mark-attendance',
  templateUrl: 'mark-attendance.html',
})
export class MarkAttendancePage {
  
  
  public index:any;
  
  public infos : any =[];
  public AA:any=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public Upload:ServiceUploadAttendenceProvider,public alertCtrl:AlertController,public toastController:ToastController) {
      
      this.GU.class=this.navParams.get('class');
      this.GU.subject=this.navParams.get('subject');
      this.GU.date=this.navParams.get('date');
      this.GU.time=this.navParams.get('time');      
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
      "time":"",
      "slot":"",
      "status":"",
      "term":""
    };
    details['REG_NO']=reg;
    details['class']=this.GU.class;
    details['subject']=this.GU.subject;
    details['date']=this.GU.date;
    details['time']=this.GU.time;
    details['slot']=this.GU.slot;
    details['status']=status;
    details['term']=this.GU.term;
    if(status!=undefined)
    {
      
      details['status']="P";

    }
    else{
      details['status']="A";
    }
    this.AA[index] = details;
    console.log("Attendence wala copy",this.AA);
  }

  ViewAtt(){
    const confirm = this.alertCtrl.create({
      title: 'Upload Attendance',
      message: 'Do you want to Upload Attendance',
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
                          this.Upload.uploadAttFun(this.AA);
                          this.navCtrl.pop();
                        }
        }
      ]
    });
    confirm.present();
  }

 
}
