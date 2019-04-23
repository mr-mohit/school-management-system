import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceCalculateResultProvider } from '../../providers/service-calculate-result/service-calculate-result';


@IonicPage()
@Component({
  selector: 'page-student-result',
  templateUrl: 'student-result.html',
})
export class StudentResultPage {
public REG:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public CR:ServiceCalculateResultProvider) {
this.REG=this.navParams.get("data");
console.log("reg no coming to student result",this.REG);

  }

 
}
