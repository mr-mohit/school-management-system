import { Component} from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUploadMarksProvider } from '../../providers/service-upload-marks/service-upload-marks';
import { ServiceGetResultDataProvider } from '../../providers/service-get-result-data/service-get-result-data';
@IonicPage()
@Component({
  selector: 'page-upload-marks',
  templateUrl: 'upload-marks.html',
})
export class UploadMarksPage {
  public Marks_array:any=[];
  public Result_array:any=[];
  public CLASS:any=[];
  public SUBJECT:any;
  public TEST:any;
  public status:boolean=false;
  public TERM:any;
  public TYPE:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public UM:ServiceUploadMarksProvider,public toastController: ToastController,
    public RD:ServiceGetResultDataProvider
    ) {
  this.CLASS=navParams.get('class');
  this.SUBJECT=navParams.get('subject');
  this.TEST=navParams.get('test');


  console.log(this.CLASS,this.SUBJECT,this.TEST);
  this.status=false;


 this.TERM=this.RD.RData[0].TERM_ID;
 this.TYPE=this.RD.RData[0].TEST_TYPE;
 console.log("term is coming",this.TEST ,"and type is",this.TYPE);

  }


  Save(reg,Marks,index)
  {
    let mk={
      "REG_NO":"",
      "TEST":"",
      "MARKS":""
    };
    mk['REG_NO']=reg;
    mk['TEST']=this.TEST;
    mk['MARKS']=Marks;


    let RD={
      "REG_NO":reg,
      "TEST":this.TEST,
      "MARKS":Marks,
      "TERM":this.TERM,
      "CLASS":this.CLASS,
      "SUBJECT":this.SUBJECT,
      "TYPE":this.TYPE
    };
   

    if(Marks!=undefined && Marks!="")
    {
  
      if(Marks>=0 && Marks<=100)
      {        
        this.Marks_array[index]=mk;    
        this.Result_array[index]=RD;   
         console.log("data ",this.Marks_array);
         
         console.log("Result data is ",this.Result_array);
         
     }      
      else
      {
        alert("Marks must be between 0 and 100");
        
      }                

    }


  }

Submit(){
  if(this.Marks_array.length-this.GU.rows == 0)
  {
    const confirm = this.alertCtrl.create({
      title: 'Upload Marks?',
      message: 'Do you want to upload marks?',
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
                          console.log(this.Marks_array);
                          this.UM.UploadFun(this.Marks_array);


                          console.log(this.Result_array);
                          this.RD.UploadRDFun(this.Result_array);
                          this.navCtrl.pop();
                          
                        }
        }
      ]
    });
    confirm.present();
  }
  else{
    alert("Please fill the required fields");
  }
   
  }

  //Validation
  check(event:any)
  {
    let newValue=event.target.value;
    let regExp= RegExp('[0-9]+$');
    if(regExp.test(newValue))
    {
     this.status=true;
    }
    else
    {
      this.status=false;

      const toast = this.toastController.create({
        message: 'Please enter numbers only',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }
   


}
