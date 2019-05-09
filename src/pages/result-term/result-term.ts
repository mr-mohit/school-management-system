import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceStudentResultProvider } from '../../providers/service-student-result/service-student-result';
import { ResultPage } from '../result/result';


@IonicPage()
@Component({
  selector: 'page-result-term',
  templateUrl: 'result-term.html',
})
export class ResultTermPage {

  public current: number=75;
  public current1: number=50;
  public current2: number=90;

  public max: number = 100;
  stroke: number = 12;
  radius: number = 50;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = 'rgb(152, 243, 156)';
  duration: number = 2000;
  animationDelay: number = 50;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;
  
  public reg:any;//this variable will store reg no if we are in student dashboard
  public RegNo:any;//this variable will store reg no if we are in teacher dashboard
  public REG:any;
  public class:any;
  public GR:any={
    "REG":"",
    "TERM":""
  }




  constructor(public navCtrl: NavController, public navParams: NavParams,public result:ServiceStudentResultProvider) {
    this.reg=this.navParams.get("data");
    console.log("reg result",this.reg);
    this.RegNo=this.navParams.get("reg");
    if(this.RegNo!=undefined)
      {
        this.REG=this.RegNo;
      }
      else{
        this.REG=this.reg;
      }
  }
  Term1()
  {
    this.GR['REG']=this.REG;
    this.GR['TERM']=1;
    this.result.getResultFun(this.GR);
    // console.log(this.GR);
    this.navCtrl.push(ResultPage,{"REG":this.REG});

  }
  Term2()
  {
    this.GR['REG']=this.REG;
    this.GR['TERM']=2;
    this.result.getResultFun(this.GR);
    this.navCtrl.push(ResultPage,{"REG":this.REG});

  }
  Term3()
  {
    this.GR['REG']=this.REG;
    this.GR['TERM']=3;
    this.result.getResultFun(this.GR);
    this.navCtrl.push(ResultPage,{"REG":this.REG});

  }
  
}
