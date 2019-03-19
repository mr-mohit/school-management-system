import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUpdateProvider } from '../../providers/service-update/service-update';

@IonicPage()
@Component({
  selector: 'page-update-term',
  templateUrl: 'update-term.html',
})
export class UpdateTermPage {
  public TID:any;
  public SESSION:any;
  public TERM:any;
  public START_DATE:any;
  public END_DATE:any;
  public termData:any=
   {
     "TID":"",
     "SESSION":"",
     "TERM":"",
     "START_DATE":"",
     "END_DATE":" "
   };


  constructor(public navCtrl: NavController, public navParams: NavParams,public TS:ServiceGetClassMasterProvider
    ,public updateTerm:ServiceUpdateProvider, public alertCtrl:AlertController) {
  }

  Submit(TID,SESSION,TERM,START_DATE,END_DATE) 
  {
    if(TID!=undefined && SESSION!=undefined && TERM!=undefined && START_DATE!=undefined && END_DATE!=undefined)
    {
      const confirm = this.alertCtrl.create({
        title: 'Update Term?',
        message: 'Do you want to Update this term?',
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
                          this.TID=TID;
                          this.SESSION=SESSION;
                          this.TERM=TERM;
                          this.START_DATE=START_DATE;
                          this.END_DATE=END_DATE;
 
                          this.termData['TID']= this.TID;
                          this.termData['SESSION']= this.SESSION;
                          this.termData['TERM']=this.TERM;
                          this.termData['START_DATE']=this.START_DATE;
                          this.termData['END_DATE']=this.END_DATE;
                          //console.log("sending data",this.sessionData);
                          if(this.updateTerm.updateTermFun(this.termData))
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
