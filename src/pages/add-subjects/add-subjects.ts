import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAddsubjectProvider } from '../../providers/service-addsubject/service-addsubject';
import { Subject } from 'rxjs/Subject';
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
  private subjectname:any;
  private subjecttype:any;
  private subjectmaterial:any;
  public subject:any={
    "subjectname":"",
    "subjecttype":"",
    "subjectmaterial":""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public addSubjectService:ServiceAddsubjectProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubjectsPage');
  }
  getSubject()
  {
    if(this.subjectname!=undefined && this.subjecttype!=undefined && this.subjectmaterial!=undefined)
    {
    this.subject['subjectname']=this.subjectname;
    this.subject['subjecttype']=this.subjecttype;
    this.subject['subjectmaterial']=this.subjectmaterial;
     this.addSubjectService.postSubject(this.subject);
    }
   else
   {
    alert("Please fill all the fields");
   }

  }
  
}
