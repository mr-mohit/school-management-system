import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceUploadMarksProvider } from '../../providers/service-upload-marks/service-upload-marks';

@IonicPage()
@Component({
  selector: 'page-update-marks',
  templateUrl: 'update-marks.html',
})
export class UpdateMarksPage {
  public Marks_array:any=[];
  public CLASS:any=[];
  public SUBJECT:any;
  public TEST:any;
  public status:boolean=false;
  


  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public UM:ServiceUploadMarksProvider,public toastController: ToastController
    ) {
  this.CLASS=navParams.get('class');
  this.SUBJECT=navParams.get('subject');
  this.TEST=navParams.get('test');
  console.log(this.CLASS,this.SUBJECT,this.TEST);
  this.status=false;
   
  console.log("number of rows is",this.GU.rows);
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
    if(Marks!=undefined && Marks!="")
    {
      if(Marks>=0 && Marks<=100)
      {        
        this.Marks_array[index]=mk;      
         console.log("data ",this.Marks_array);
     }      
      else
      {
        alert("Marks should be in between 0 and 100");
        
      }                

    }
  }

Update(){
//  console.log("length value",this.Marks_array.length);
  if(this.Marks_array.length-this.GU.rows == 0)
  {
    const confirm = this.alertCtrl.create({
      title: 'Update Marks',
      message: 'Do you want to Update Marks?',
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
                          this.UM.UpdateFun(this.Marks_array);
                          this.navCtrl.pop();
                        }
        }
      ]
    });
    confirm.present();
  }
  else{
    alert("please fill all fields");
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
        message: 'Please Enter Numbers Only',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }

}
