import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceGetTeacherProvider } from '../../providers/service-get-teacher/service-get-teacher';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import {ServiceAssignSubProvider} from '../../providers/service-assign-sub/service-assign-sub';

/**
 * Generated class for the AssignSubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-sub',
  templateUrl: 'assign-sub.html',
})
export class AssignSubPage {
   public Tea_REG_NO:any;
   public SubjectClass:any;
   public SubjectId:any;

   private SubjectData:any={
    "REG_NO":"",
    "CLASS_ID":""
  };

  private AssignedSubjectData:any={
    "REG_NO":"",
    "SUBJECT_ID":""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public GetTeacher:ServiceGetTeacherProvider,
    public GetClass:ServiceGetClassMasterProvider,
    public GetSubject:ServiceAssignSubProvider,
    public toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignSubPage');
    this.GetTeacher.getData();
    //Get Classes On Page load
    this.GetClass.getClassFun();
  }

  //Will get Subjects that are not Assigned to Any Teacher
  getSubject(SubjectClass)
  {
    this.SubjectData['REG_NO']=this.Tea_REG_NO;
    this.SubjectData['CLASS_ID']=this.SubjectClass;

    this.GetSubject.getSubjectData(this.SubjectData);
  }

  AssignSub()
  {
    if(this.Tea_REG_NO!=undefined && this.SubjectClass!=undefined && this.SubjectId!=undefined)
    {
      
      this.AssignedSubjectData['REG_NO']=this.Tea_REG_NO;
      this.AssignedSubjectData['SUBJECT_ID']=this.SubjectId;

      //Sending Selected Data to Database

      if(this.GetSubject.SaveAssignedData(this.AssignedSubjectData))
      {
        this.navCtrl.pop();
      }
    }
    else
    {
      const toast = this.toast.create({
        message: 'Please select all fileds',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

}
