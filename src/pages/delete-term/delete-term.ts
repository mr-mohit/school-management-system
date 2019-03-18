import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceDeleteTermProvider } from '../../providers/service-delete-term/service-delete-term';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

@IonicPage()
@Component({
  selector: 'page-delete-term',
  templateUrl: 'delete-term.html',
})
export class DeleteTermPage {
  public TERM:any;
  public TD:any=
 {
   "TERM":""
 };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertctrl:AlertController,public cid:ServiceGetClassMasterProvider,
    public delTerm:ServiceDeleteTermProvider) {
  }

  deleteTerm(TERM) 
  {
    if(TERM!=undefined)
    {
      const confirm = this.alertctrl.create({
        title: 'Delete this Term',
        message: 'Do you really want to delete this Term ?',
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
                          this.TERM=TERM;
                          this.TD['TERM']= this.TERM;
                          console.log("sending data",this.TD);
                          if(this.delTerm.deleteTermFun(this.TD))
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
