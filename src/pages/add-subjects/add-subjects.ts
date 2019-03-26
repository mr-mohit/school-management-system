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
  public status:boolean;
  private subjectid:any;
  private subjectname:any;
  private subjecttype:any;
  private subjectmaterial:any;
  private subject:any={
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

  postSubject(subjectid,subjectname,subjecttype,subjectmaterial) {
    if(subjectid!=undefined && subjectname!=undefined && 
      subjecttype!=undefined && subjectmaterial!=undefined && 
      this.status!=false||undefined)
    {
    const confirm = this.alertctrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to add the selected subject?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.subjectid=subjectid;
            this.subjectname=subjectname;
            this.subjecttype=subjecttype;
            this.subjectmaterial=subjectmaterial;
            this.subject['subjectid']=this.subjectid;
            this.subject['subjectname']=this.subjectname;
            this.subject['subjecttype']=this.subjecttype;
            this.subject['subjectmaterial']=this.subjectmaterial;
            if(this.addSubjectService.postSubject(this.subject))
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
    
  }else
    {
    alert("Please fill required information")
    }

  }

  //Check SubjectName With Pattern
  namecheck(event: any) 
  {
      let newValue = event.target.value;

     let regExp = new RegExp('[A-Za-z ]+$');

  
     if(regExp.test(newValue))
     {
       this.status=true;
     }
     else
     {
      alert("Special Characters/Numbers are not allowed");
      this.status=false;
      //  console.log(regExp.test(newValue));
     }
  }

  //Check SubjectID with Pattern
  idcheck(event:any)
  {
    let newValue=event.target.value;
    let regExp= RegExp('[A-Za-z0-9 ]+$');
    if(regExp.test(newValue))
    {
      this.status=true;
    }
    else
    {
     alert("Special Characters are not allowed");
     this.status=false;
     //  console.log(regExp.test(newValue));
    }
  }
}
