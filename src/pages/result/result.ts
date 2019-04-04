import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public user:ServiceLoginProvider, 
    public RES:ServiceStudentResultProvider ) {


  }

  
}
