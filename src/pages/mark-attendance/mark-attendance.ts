import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { setZIndex } from 'ionic-angular/umd/navigation/nav-util';
import { ServiceUploadAttendenceProvider } from '../../providers/service-upload-attendence/service-upload-attendence';
import { get } from '@ionic-native/core';


/**
 * Generated class for the MarkAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark-attendance',
  templateUrl: 'mark-attendance.html',
})
export class MarkAttendancePage {
  
  
  public index:any;
  public class:any;
  public subject:any;
  public time:any;
  public date:any;
  public slot:any;
  public details:any={

    "REG_NO":"",
    "class":"",
    "subject":"",
    "date":"",
    "time":"",
    "slot":"",
    "status":""
  };

  public infos : any =[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public Upload:ServiceUploadAttendenceProvider) {
      this.details['class']=this.navParams.get('class');
      this.details['subject']=this.navParams.get('subject');
      this.details['date']=this.navParams.get('date');
      this.details['time']=this.navParams.get('time');      
      this.details['slot']=this.navParams.get('slot');    
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkAttendancePage');
  }

  Submit(reg,status,ind)
  {
    
    //this.index=ind;
    //console.log("index",this.index);
    if(this.GU.attendence[ind].REG_NO == reg)
    {
        this.GU.attendence[ind].status = status;
        console.log("Attendance",this.GU.attendence);
    }

     
      //att[ind].Status=status;
      //this.attendence.push(att[ind]);
       }

  ViewAtt()
  {
   //console.log("class",this.class,"subject",this.subject,"slot",this.slot,"date",this.date,"time",this.time);
   //console.log("Details Associated with att.",this.details);
      var temp:any;
      for (var i in  this.GU.attendence)
        {
           this.GU.attendence[i].class = this.details['class'];
           this.GU.attendence[i].subject = this.details['subject'];
           this.GU.attendence[i].date = this.details['date'];
           this.GU.attendence[i].time = this.details['time'];      
           this.GU.attendence[i].slot = this.details['slot'];   
         // this.infos[i] = temp;
        }
   // this.infos = this.GU.attendence.concat(this.details);
   console.log( this.GU.attendence);
   this.Upload.uploadAttFun( this.GU.attendence);
  }
}
