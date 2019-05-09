import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import * as moment from "moment"; 
import { GetEventProvider } from '../../providers/get-event/get-event';


@IonicPage()
@Component({
  selector: 'page-view-calendar',
  templateUrl: 'view-calendar.html',
})
export class ViewCalendarPage {
  myDate = moment().format("YYYY-MM-DD");


  currentEvents = [
    {
      year: "",
      month:"",
      date: ""
    }
    
  ];
  // currentEvents=this.GE.Event;
  

  public Load:any=
  {
    "date":"",
  };

  public date:any;
  public month:any;
  public year:any;
  public eventlist=[];
  public CalendarData:any=
 {
   "date":"",
 };
 public ar:any=[];
 public i:any;
//  public ob={
//    year:"",
//    month:"",
//    day:""
//  }
public temp:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public VCal:ServiceGetClassMasterProvider,
    public GE:GetEventProvider) {   
      
     
       
   
  }
  functCall()
  {
    console.log("array of constructor ",this.GE.Event);
       for (let i in this.GE.Event)
       {
         console.log("checking value of i ",i);
         
        this.currentEvents = [
          {
            year: this.GE.Event[i].year,
            month:this.GE.Event[i].month,
            date: this.GE.Event[i].day
          },
       ];
        // let ob={
        //   "year":this.GE.Event[i].year,
        //   "month":this.GE.Event[i].month,
        //   "day":this.GE.Event[i].day
        // }
        // this.ar.row=ob[i];

       }
      //  console.log("temporary array: ",this.ar);
      //  console.log("Object variable: ",ob)

  }

  onDaySelect($event)
  {
    console.log($event);
    this.date=$event.date;
    this.month=$event.month+1;
    this.year=$event.year;

    this.CalendarData['date']= this.year+"-"+this.month+"-"+this.date;
    console.log(this.CalendarData['date']);
    // this.CalendarData['month']= this.month;
    // this.CalendarData['year']= this.year;
    this.VCal.getEventFun(this.CalendarData).then((data:any)=>{
      this.eventlist=data.data;
      // console.log("date events",this.eventlist);
    })
    }

    ionViewDidLoad() {
      this.Load['date']=this.myDate;
      console.log(this.Load['date']);
      this.VCal.getEventFun(this.Load).then((data:any)=>{
        this.eventlist=data.data;
        
        this.functCall();
        // console.log("date events",this.eventlist);
      })
    }

     


}
