import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceExamProvider } from '../../providers/service-exam/service-exam';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';

/**
 * Generated class for the StudentExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-exams',
  templateUrl: 'student-exams.html',
})
export class StudentExamsPage {

  private STU_REG_NO;

  constructor(public navCtrl: NavController, public navParams: NavParams,private SeeExam:ServiceExamProvider,private getREG_NO:ServiceLoginProvider) 
  {
   
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad StudentExamsPage');
  this.STU_REG_NO=this.getREG_NO.recdata.data[0].REG_NO;
    console.log("Cuurent Id ",this.STU_REG_NO);
    
    //Sending To Provider
    this.SeeExam.getExamData(this.STU_REG_NO);
  }

}
