import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceAdminmessageProvider } from '../../providers/service-adminmessage/service-adminmessage';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';

/**
 * Generated class for the AdminMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-messages',
  templateUrl: 'admin-messages.html',
})
export class AdminMessagesPage {

private Date=new Date().getDate();
private Month=new Date().getMonth()+1;
private Year=new Date().getFullYear();
private timestarts:any;
private timeEnds:any;
private receiver:any;
private MessageTitle:any;
private MessageDescription:any;

//FCN registration token
public fcn_token:any; 

public message={
  "messageSender":"",
  "messageReceiver":"",
  "messageTitle":"",
  "messageDescription":"",
};


  constructor(public navCtrl: NavController, public navParams: NavParams, public getuserid:ServiceLoginProvider,
                public Adminmessages:ServiceAdminmessageProvider,public alertCtrl:AlertController,
                public getstudent:ServiceGetClassMasterProvider) {

    this.timestarts=this.Date+"-"+this.Month+"-"+this.Year;
    this.timeEnds=this.Date+"-"+this.Month+"-"+this.Year;
    console.log(this.timestarts);

    this.getstudent.getStudentFun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminMessagesPage');
  }

  SendMessages()
  {
    if(this.receiver!=undefined && this.MessageTitle!=undefined && this.MessageDescription!=undefined)
    {
  
         const confirm=this.alertCtrl.create({
          title:'Send Message?',
          buttons:[
            {
              text:'Yes',
              handler:()=>
              {
                  this.message['messageSender']=this.getuserid.recdata.data[0].REG_NO;
                  this.message['messageReceiver']=this.receiver;
                  this.message['messageTitle']=this.MessageTitle;
                  this.message['messageDescription']=this.MessageDescription;
                  this.Adminmessages.postMsg(this.message);
                  this.navCtrl.pop();
              }
            },
            {
              text:'No',
              handler:()=>
              {

              }
            }
          ]


         });
         confirm.present();
    }
    else
    {
    
       alert("Fields cannot be empty");
    }
  }

}
