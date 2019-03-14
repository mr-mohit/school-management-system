import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceClassSubjectRegProvider } from '../../providers/service-class-subject-reg/service-class-subject-reg';


@IonicPage()
@Component({
  selector: 'page-class-subject-reg',
  templateUrl: 'class-subject-reg.html',
})
export class ClassSubjectRegPage {
  public CLASS:any;
  public SUBJECT:any;
  public csrData:any=
  {
    "CLASS":"",
   "SUBJECT":""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public cid:ServiceGetClassMasterProvider,public alertCtrl:AlertController,public CSR:ServiceClassSubjectRegProvider) {
  }

  Submit(CLASS,SUBJECT) 
  {
    if(CLASS!=undefined && SUBJECT!=undefined)
    {
      const confirm = this.alertCtrl.create({
        title: 'Register Subject under Class?',
        message: 'Do you want to register ?',
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
                          this.CLASS=CLASS;
                          this.SUBJECT=SUBJECT;

                          this.csrData['CLASS']= this.CLASS;
                          this.csrData['SUBJECT']=this.SUBJECT;
                          console.log("sending data",this.csrData);
                          this.CSR.addCSR(this.csrData);
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
