import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAddsubjectProvider } from '../../providers/service-addsubject/service-addsubject';

/**
 * Generated class for the StudentSyllabusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-syllabus',
  templateUrl: 'student-syllabus.html',
})
export class StudentSyllabusPage {
  // postSyllFun
  public subjectId:any;
  public subjectName:any;
  public subjectMat:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceAddsubjectProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentSyllabusPage');
  }

}
