import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ServiceAddClassProvider } from '../../providers/service-add-class/service-add-class';
import { ClassSubjectRegPage } from '../class-subject-reg/class-subject-reg';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@IonicPage()
@Component({
  selector: 'page-add-class',
  templateUrl: 'add-class.html',
})
export class AddClassPage {
 public CLASS:any;
 public SECTION:any;
 public classData:any=
 {
   "CLASS":"",
  "SESSION":""
 };

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public addClass:ServiceAddClassProvider,public cid:ServiceGetClassMasterProvider) {
  
  }

  Submit(CLASS,SECTION) 
  {
    if(CLASS!=undefined && SECTION!=undefined)
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
                          this.CLASS=CLASS;
                          this.SECTION=SECTION;

                          this.classData['CLASS']= this.CLASS;
                          this.classData['SECTION']=this.SECTION;
                          console.log("sending data",this.classData);
                          this.addClass.addClassFun(this.classData);
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

  Class_Sub()
  {
    this.navCtrl.push(ClassSubjectRegPage);
    this.cid.getClassFun();
    this.cid.getSubjectFun();
  }

}
