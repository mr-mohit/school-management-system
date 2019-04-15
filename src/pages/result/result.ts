import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
public RegNo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:ServiceLoginProvider, 
    public RES:ServiceStudentResultProvider ) {
      this.RegNo=this.navParams.get("reg");


  }

  
}
