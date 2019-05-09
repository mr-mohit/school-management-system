import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';
import { StudentResultPage } from '../student-result/student-result';
import { ServiceCalculateResultProvider } from '../../providers/service-calculate-result/service-calculate-result';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
// public RegNo:any;
// public RN:any;
public REG:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:ServiceLoginProvider, 
    public RES:ServiceStudentResultProvider ,public CR:ServiceCalculateResultProvider) {
      // this.RegNo=this.navParams.get("reg");
      // this.RN=this.navParams.get("data");
      // console.log(this.RN,"reg no coming");
      // if(this.RegNo!=undefined)
      // {
      //   this.REG=this.RegNo;
      // }
      // else{
      //   this.REG=this.RN;
      // }

      this.REG=this.navParams.get("REG");


  }

  FR()
  {
    console.log("student is",this.REG);
    this.navCtrl.push(StudentResultPage,{"data":this.REG});
    this.CR.CalFun(this.REG);
  }
}
