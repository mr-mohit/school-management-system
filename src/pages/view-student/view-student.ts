import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';


@IonicPage()
@Component({
  selector: 'page-view-student',
  templateUrl: 'view-student.html',
})
export class ViewStudentPage {
public Data:any;

public recdata1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public SD:ServiceStudentResultProvider) {
    
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewStudentPage');
  }

}
