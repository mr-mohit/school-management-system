import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceAddTermProvider } from '../../providers/service-add-term/service-add-term';
import { ServiceViewSessionProvider } from '../../providers/service-view-session/service-view-session';


@IonicPage()
@Component({
  selector: 'page-add-term',
  templateUrl: 'add-term.html',
})
export class AddTermPage {
  public SESSION:any;
  public TERM:any;
  public START_DATE:any;
  public END_DATE:any;
  public termData:any=
   {
     "SESSION":"",
    "TERM":"",
    "START_DATE":"",
    "END_DATE":" "
   };

   public indata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public addTerm:ServiceAddTermProvider,public SVS:ServiceViewSessionProvider ) {
  
  
  }
  

  Submit(SESSION,TERM,START_DATE,END_DATE) 
  {
    console.log("session",this.SVS.SessData);
    if(SESSION!=undefined && TERM!=undefined && START_DATE!=undefined && END_DATE!=undefined)
    {
      if(START_DATE<END_DATE)
      {
        const confirm = this.alertCtrl.create({
          title: 'Save Term?',
          message: 'Do you want to save the Term?',
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
  
                            this.SESSION=SESSION;
                            this.TERM=TERM;
                            this.START_DATE=START_DATE;
                            this.END_DATE=END_DATE;
  
                            this.termData['SESSION']= this.SESSION;
                            this.termData['TERM']=this.TERM;
                            this.termData['START_DATE']=this.START_DATE;
                            this.termData['END_DATE']=this.END_DATE;
                            
                            if(this.addTerm.addTermFun(this.termData))
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
        alert("End Date can't be before Start Date / or same as Start Date");
      }
      

    }
    else{
      alert("Please fill the required fields");
    }
    console.log("last",this.indata);
}

getDate(SESSION)
{
  console.log(SESSION,"id of session");
}
}
