import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUpdateProvider } from '../../providers/service-update/service-update';

/**
 * Generated class for the UpdateSubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-subjects',
  templateUrl: 'update-subjects.html',
})
export class UpdateSubjectsPage {
  public SID:any;
  public SUBNAME:any;
  public SUBTYPE:any;
  public SUBMATERIAL:any;
  public updateSub:any=
  {
    "SID":"",
    "SUBNAME":"",
    "SUBTYPE":"",
    "SUBMATERIAL":""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public updSubject:ServiceGetClassMasterProvider,
              public updobj:ServiceUpdateProvider,
              public alertctrl:AlertController) {
              this.updSubject.getSubjectFun();
              //console.log(this.updSubject.subjectData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateSubjectsPage');
  }

  updateSSubject(SID,SUBNAME,SUBTYPE,SUBMATERIAL)
  {
    if(SID!=undefined && SUBNAME!=undefined && SUBTYPE!=undefined && SUBMATERIAL!=undefined)
    {
    const confirm = this.alertctrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to update the selected subject?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.SID=SID;
            this.SUBNAME=SUBNAME;
            this.SUBTYPE=SUBTYPE;
            this.SUBMATERIAL=SUBMATERIAL;
            this.updateSub['SID']=this.SID;
            this.updateSub['SUBNAME']=this.SUBNAME;
            this.updateSub['SUBTYPE']=this.SUBTYPE;
            this.updateSub['SUBMATERIAL']=this.SUBMATERIAL;
            //console.log("Passing array",this.updateSub);
            if(this.updobj.uSubject(this.updateSub))
            {
              this.navCtrl.pop();
            }
          }
        },
        {
          text: 'Cancel',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
    
  }
  else
  {
    alert("Please fill required information")
  }
 }
}