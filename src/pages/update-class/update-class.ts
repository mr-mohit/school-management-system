import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUpdateProvider } from '../../providers/service-update/service-update';



@IonicPage()
@Component({
  selector: 'page-update-class',
  templateUrl: 'update-class.html',
})
export class UpdateClassPage {
  public CID:any;
  public CLASS:any;
  public SECTION:any;
  public classData:any=
  {
    "CID":"",
    "CLASS":"",
   "SECTION":""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public GS:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public UC:ServiceUpdateProvider) {
  }

  Submit(CID,CLASS,SECTION) 
  {
    if(CID!=undefined && CLASS!=undefined && SECTION!=undefined)
    {
      const confirm = this.alertCtrl.create({
        title: 'Save Class?',
        message: 'Do you want to save this Class?',
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
                          this.CID=CID;
                          this.CLASS=CLASS;
                          this.SECTION=SECTION;
                          this.classData['CID']= this.CID;
                          this.classData['CLASS']= this.CLASS;
                          this.classData['SECTION']=this.SECTION;
                          console.log("updating data",this.classData);
                          if(this.UC.updateClassFun(this.classData))
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
