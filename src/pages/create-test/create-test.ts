import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceCreateTestProvider } from '../../providers/service-create-test/service-create-test';


@IonicPage()
@Component({
  selector: 'page-create-test',
  templateUrl: 'create-test.html',
})
export class CreateTestPage {

 public classID:any;


  public CLASS:any;
  public TERM:any;
  public SUBJECT:any;
  public TYPE:any;
  public NAME:any;
  public TOPIC:any;
  public DATE:any;
  public TM:any;
  public WM:any;
  public testData:any=
  {
    "CLASS":"",
   "TERM":"",
   "SUBJECT":"",
   "TYPE":"",
   "NAME":"",
   "TOPIC":"",
   "DATE":"",
   "TM":"",
   "WM":"",

  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,
    public CT:ServiceCreateTestProvider,public cid:ServiceGetClassMasterProvider
    ) {
  }

  Submit(CLASS,SUBJECT,TYPE,TERM,DATE,NAME,TOPIC,TM,WM) 
  {
    if(CLASS!=undefined && TERM!=undefined && SUBJECT!=undefined && TYPE!=undefined &&
      DATE!=undefined && NAME!=undefined && TOPIC!=undefined && TM!=undefined && WM!=undefined
      )
    {
      const confirm = this.alertCtrl.create({
        title: 'Create Test',
        message: 'Do you want to create this test?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
                            this.navCtrl.pop();
                           }
          },
          {
           text: 'Okay',
           handler: () => {
                          this.CLASS=CLASS;
                          this.TERM=TERM;
                          this.SUBJECT=SUBJECT;
                          this.TYPE=TYPE;
                          this.NAME=NAME;
                          this.DATE=DATE;
                          this.TOPIC=TOPIC;
                          this.TM=TM;
                          this.WM=WM;

                          this.testData['CLASS']= this.CLASS;
                          this.testData['TERM']=this.TERM;
                          this.testData['SUBJECT']=this.SUBJECT;
                          this.testData['TYPE']=this.TYPE;
                          this.testData['NAME']=this.NAME;
                          this.testData['DATE']=this.DATE;
                          this.testData['TOPIC']=this.TOPIC;
                          this.testData['TM']=this.TM;
                          this.testData['WM']=this.WM;

                          console.log("sending data",this.testData);

                          if(this.CT.createTestFun(this.testData))
                          {
                            this.navCtrl.pop();
                          }
                          }
          }
      ]
    });
    confirm.present();

    }
    else{
      alert("plese fill required fields");
    }

  }

  getSubject(CLASS)
  {
    this.classID=CLASS;
    //console.log(this.postId['classId']);
    this.cid.getAttSubjectFun(CLASS);
  }




}
