import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceFetchTimeTableProvider } from '../../providers/service-fetch-time-table/service-fetch-time-table';

/**
 * Generated class for the StudentTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-time-table',
  templateUrl: 'student-time-table.html',
})
export class StudentTimeTablePage {

  public Today:any;
  public status:boolean=false;
  private REG_NO:any;
  private Days:any=[
    {Day:"Monday"},
    {Day:"Tuesday"},
    {Day:"Wednesday"},
    {Day:"Thursday"},
    {Day:"Friday"},
    {Day:"Saturday"},
 ];

 private FetchTimeTable:any={
     "REG_NO":"",
      "DAY":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,public getREG_NO:ServiceLoginProvider,
    public getData:ServiceFetchTimeTableProvider) {
      this.status=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentTimeTablePage');
    this.REG_NO=this.getREG_NO.recdata.data[0].REG_NO;
    console.log(this.REG_NO);
    console.log(this.Days);
    this.Today=new Date().getDay;
    console.log("Today is ",this.Today);
  }

  getTimeTable(Day)
  {
    this.FetchTimeTable['REG_NO']=this.REG_NO;
    this.FetchTimeTable['DAY']=Day;
    console.log("Data ",this.FetchTimeTable);
    this.status=true;
    this.getData.post(this.FetchTimeTable);

  }

}
