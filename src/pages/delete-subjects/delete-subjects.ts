import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceDeleteSubjectProvider } from '../../providers/service-delete-subject/service-delete-subject';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the DeleteSubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-subjects',
  templateUrl: 'delete-subjects.html',
})
export class DeleteSubjectsPage {
  public SUBJECT:any;
  public SUB:any=
 {
   "SUBJECT":""
 };
  constructor(public navCtrl: NavController,public alertctrl:AlertController, 
              public navParams: NavParams, public delSubject:ServiceDeleteSubjectProvider
              ,public cid:ServiceGetClassMasterProvider ) {
}

deleteSubject(SUBJECT) 
  {
    if(SUBJECT!=undefined)
    {
      const confirm = this.alertctrl.create({
        title: 'Delete this Subject?',
        message: 'Do you really want to delete this Subject?',
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
                          this.SUBJECT=SUBJECT;
                          this.SUB['SUBJECT']= this.SUBJECT;
                          console.log("sending data",this.SUB);
                          if(this.delSubject.deleteSubjectFun(this.SUB))
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
      alert("Please fill the required fields");
    }

  }
  
}