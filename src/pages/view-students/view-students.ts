import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ViewStudents_2Page } from '../view-students-2/view-students-2';
import { HttpClientModule } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-view-students',
  templateUrl: 'view-students.html',
})
export class ViewStudentsPage {
  public CID:any;
  public SID:any;
  public CS:any=
  {
    "CID":"",
    "SID":""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public GS:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController) {
  }

  
View(CID,SID)
{
console.log("class session data",CID,SID);
if(CID!=undefined && SID!=undefined )
    {    
      this.CID=CID;
      this.SID=SID;
      this.CS['CID']= this.CID;
      this.CS['SID']= this.SID;
      console.log("sending data",this.CS);
      if(this.GS.getCSFun(this.CS))
      {
        this.navCtrl.push(ViewStudents_2Page);
      }
    }
    else{
      alert("plese fill required fields");
    }

}

}
