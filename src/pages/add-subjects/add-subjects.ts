import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceAddsubjectProvider } from '../../providers/service-addsubject/service-addsubject';

/**
 * Generated class for the AddSubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-subjects',
  templateUrl: 'add-subjects.html',
})
export class AddSubjectsPage {
  private subjectid:any;
  private subjectname:any;
  private subjecttype:any;
  private subjectmaterial:any;
  public subject:any={
    "subjectid":"",
    "subjectname":"",
    "subjecttype":"",
    "subjectmaterial":""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public addSubjectService:ServiceAddsubjectProvider,
    public alertctrl:AlertController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubjectsPage');
  }
  getSubject()
  {
    this.subject['subjectid']=this.subjectid;
    this.subject['subjectname']=this.subjectname;
    this.subject['subjecttype']=this.subjecttype;
    this.subject['subjectmaterial']=this.subjectmaterial;
    this.addSubjectService.postSubject(this.subject);
    return 1;
    
  }
  showConfirm() {
    if(this.subjectid!=undefined && this.subjectname!=undefined && this.subjecttype!=undefined && this.subjectmaterial!=undefined)
    {
    const confirm = this.alertctrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to add the selected subject?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            if(this.getSubject()==1)
            {
              alert("Submission Successfull")
            }
           // this.navCtrl.push(AddSubjectsPage);
            //console.log('Confirm clicked');
            this.navCtrl.pop();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            //console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    
  }else
    {
    alert("Please fill required information")
    }

  }
}
