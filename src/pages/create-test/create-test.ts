import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceCreateTestProvider } from '../../providers/service-create-test/service-create-test';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-test',
  templateUrl: 'create-test.html',
})
export class CreateTestPage {
  myDate: String = new Date().toISOString();
 public classID:any;
 slideOneForm: FormGroup;
 submitAttempt: boolean = false;

  public CLASS:any;
  public TERM:any;
  public SUBJECT:any;
  public TYPE:any;
  public NAME:any;
  public TOPIC:any;
  public DATE:any;
  public TM:any;
  public WM:any;
  public ST:any;
  public DURATION:any;
  public RM:any;
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
   "ST":"",
   "DURATION":"",
   "RM":""

  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,
    public CT:ServiceCreateTestProvider,public cid:ServiceGetClassMasterProvider,public formBuilder: FormBuilder
    ) {

      this.slideOneForm = formBuilder.group({
        test_name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ].{5,300}$'), Validators.required])],
        topic: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z1-9 ][0-9].{5,50}$'), Validators.required])],
        total_marks:['', Validators.compose([Validators.maxLength(3),Validators.required, Validators.pattern('^([1-9][0-9]|100)$')])],
        weightage_marks: ['', Validators.compose([Validators.maxLength(3),Validators.required, Validators.pattern('^([1-9][0-9]|100)$')])],
        room_no: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9 ].{0,10}$'), Validators.required])],

      });


  }

  Submit(CLASS,SUBJECT,TYPE,TERM,DATE,ST,DURATION) 
  {
    if(CLASS!=undefined && TERM!=undefined && SUBJECT!=undefined && TYPE!=undefined &&
      DATE!=undefined  && ST!=undefined && DURATION!=undefined )
    {
      if(this.myDate<DATE)
      {
            const confirm = this.alertCtrl.create({
              title: 'Create Test?',
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
                                this.NAME=this.slideOneForm.getRawValue().test_name;
                                this.DATE=DATE;
                                this.TOPIC=this.slideOneForm.getRawValue().topic;
                                this.TM=this.slideOneForm.getRawValue().total_marks;
                                this.WM=this.slideOneForm.getRawValue().weightage_marks;
                                this.ST=ST;
                                this.DURATION=DURATION;
                                this.RM=this.slideOneForm.getRawValue().room_no;
  
      
                                this.testData['CLASS']= this.CLASS;
                                this.testData['TERM']=this.TERM;
                                this.testData['SUBJECT']=this.SUBJECT;
                                this.testData['TYPE']=this.TYPE;
                                this.testData['NAME']=this.NAME;
                                this.testData['DATE']=this.DATE;
                                this.testData['TOPIC']=this.TOPIC;
                                this.testData['TM']=this.TM;
                                this.testData['WM']=this.WM;
                                this.testData['ST']=this.ST;
                                this.testData['DURATION']=this.DURATION;
                                this.testData['RM']=this.RM;
      
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
        alert("Please enter a valid date")
      }
      

    }
    else{
      alert("Please fill the required fields");
    }

  }

  getSubject(CLASS)
  {
    this.classID=CLASS;
    this.cid.getAttSubjectFun(CLASS);
  }

  reset(){
    
    this.TERM=null;
    this.SUBJECT=null;
    this.TYPE=null;

  }
  reset_two(){
    
    this.SUBJECT=null;
    this.TYPE=null;

  }
  reset_three(){
    
    this.TYPE=null;

  }


}
