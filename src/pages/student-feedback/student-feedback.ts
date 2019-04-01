import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceAddStudentfeedbackProvider } from '../../providers/service-add-studentfeedback/service-add-studentfeedback';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';

@IonicPage()
@Component({
  selector: 'page-student-feedback',
  templateUrl: 'student-feedback.html',
})
export class StudentFeedbackPage {
  private reg:any;
  private date:any;
  private subject:any;
  private description:any;

  private feedbackData:any={
    "reg_no":"",
    "date":"",
    "subject":"",
    "description":""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addFeedback:ServiceAddStudentfeedbackProvider,
              public alertctrl:AlertController,
              public log:ServiceLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentFeedbackPage');
  }

  postData(date,subject,description)
  {
    if(date!=undefined && subject!=undefined && description!=undefined)
    {
    const confirm = this.alertctrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to submit the feedback?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.reg=this.log.details.REG_NO;
            this.date=date;
            this.subject=subject;
            this.description=description;
            this.feedbackData['reg_no']=this.reg;
            this.feedbackData['date']=this.date;
            this.feedbackData['subject']=this.subject;
            this.feedbackData['description']=this.description;
            if(this.addFeedback.postFeedback(this.feedbackData))
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
  }
  else
  {
    alert("Please fill required information")
  }
}
}
