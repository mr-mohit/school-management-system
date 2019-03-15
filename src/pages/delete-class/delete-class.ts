import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceDeleteClassProvider } from '../../providers/service-delete-class/service-delete-class';


@IonicPage()
@Component({
  selector: 'page-delete-class',
  templateUrl: 'delete-class.html',
})
export class DeleteClassPage {
  public CLASS:any;
  public CD:any=
 {
   "CLASS":""
 };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertctrl:AlertController,public cid:ServiceGetClassMasterProvider,
    public delClass:ServiceDeleteClassProvider) {
  }

  deleteClass(CLASS) 
  {
    if(CLASS!=undefined)
    {
      const confirm = this.alertctrl.create({
        title: 'Delete this Class?',
        message: 'Do you really want to delete this Class ?',
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
                          this.CD['CLASS']= this.CLASS;
                          console.log("sending data",this.CD);
                          if(this.delClass.deleteClassFun(this.CD))
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
