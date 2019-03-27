import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarModule } from 'ionic3-calendar-en';
import * as moment from 'moment';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';


@IonicPage()
@Component({
  selector: 'page-view-calendar',
  templateUrl: 'view-calendar.html',
})
export class ViewCalendarPage {
  public date:any;
  public month:any;
  public year:any;
  public eventlist=[];
  public CalendarData:any=
 {
   "date":"",
 };

  constructor(public navCtrl: NavController, public navParams: NavParams,public VCal:ServiceGetClassMasterProvider) {
  }

  onDaySelect($event)
  {
    // console.log($event);
    this.date=$event.date;
    this.month=$event.month+1;
    this.year=$event.year;
    // console.log(this.date,this.month,this.year);


    this.CalendarData['date']= this.year+"-"+this.month+"-"+this.date;
    // this.CalendarData['month']= this.month;
    // this.CalendarData['year']= this.year;
    this.VCal.getEventFun(this.CalendarData).then((data:any)=>{
      this.eventlist=data.data;
      // console.log("date events",this.eventlist);
    })
    }



}
