import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceDeleteSubjectProvider } from '../../providers/service-delete-subject/service-delete-subject';

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
  public subjectid:any=[];
  public subjects:any;
  constructor(public navCtrl: NavController,public alertctrl:AlertController, public navParams: NavParams, public service:ServiceDeleteSubjectProvider ) {
    //console.log("data inside delete subject",this.subjects ,typeof this.subjects);
    this.refresh();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteSubjectsPage');
  }

  delete(getsubjectname)
  {
    this.subjectid=getsubjectname;    
    //console.log(this.subjectname);
    //console.log("getting id of selected item : ",getsubjectname);
    //console.log("getting data",this.data,typeof this.data);
    // this.deleteSubjectService.postSubjectName(this.subjectname);
    if(this.service.postSubjectId(this.subjectid))
      return 1 ;
    else
      return 0;
  }
  showConfirm(getsubjectname) 
  {
    if(getsubjectname != undefined)
    {
    const confirm = this.alertctrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to delete the selected subject?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            if(this.delete(getsubjectname)==1)
            {
              alert("Deletion Successfull");
              //console.log('Success....');
            }
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
  }
  else
  {
    alert("Select the subject you want to delete");
  }
}
refresh()
  {
    this.service.postDelete().then(data=>{
      this.subjects=data['data'];
      console.log("get subjects",this.subjects)
    });
   //console.log("deleted subject",dataObj);
  }
}