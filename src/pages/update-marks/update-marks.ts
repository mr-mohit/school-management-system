import { Component,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Alert } from 'ionic-angular';
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
  public new:any;
  public upMarks:any={
    "REG":"",
    "TEST":"",
    "MARKS":""
  };
  


  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public alertCtrl:AlertController,public UM:ServiceUploadMarksProvider,public toastController: ToastController,private cdr: ChangeDetectorRef
    ) {
 
      this.Marks_array=this.GU.UploadM;

  this.CLASS=navParams.get('class');
  this.SUBJECT=navParams.get('subject');
  this.TEST=navParams.get('test');
  console.log(this.CLASS,this.SUBJECT,this.TEST);
  this.status=false;
   
  console.log("number of rows is",this.GU.rows);
  }


  Save(reg,Marks,index)
  {

    //this.Marks_array=this.GU.UploadM;

    let mk={
      "REG_NO":"",
      "TEST":"",
      "MARKS":"",
      "CLASS":"",
      "SUBJECT":"",
      "FIRST_NAME":"",
      "LAST_NAME":""
    };
    mk['REG_NO']=reg;
    mk['TEST']=this.TEST;
    mk['MARKS']=Marks;
    mk['CLASS']=this.CLASS;
    mk['SUBJECT']=this.SUBJECT;
    if(Marks!=undefined && Marks!="")
    {
      if(Marks>=0 && Marks<=100)
      {        
        this.Marks_array[index]=mk;      
         console.log("data to be stored ",this.Marks_array);
     }      
      else
      {
        alert("Marks must be between 0 and 100");
        
      }                

    }
  }

// Update(){
//   {
//     const confirm = this.alertCtrl.create({
//       title: 'Update marks?',
//       message: 'Do you want to update marks?',
//       buttons: [
//         {
//           text: 'Cancel',
//           handler: () => {
//                           this.navCtrl.pop();
//                          }
//         },
//         {
//          text: 'Okay',
//          handler: () => {
//                           console.log(this.Marks_array);
//                           this.UM.UpdateFun(this.Marks_array);
//                           this.navCtrl.pop();
//                         }
//         }
//       ]
//     });
//     confirm.present();
//   }
  
   
  // }

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
      

  ngAfterViewChecked(){
    //your code to update the model
    
    this.cdr.detectChanges();
 }

 updateMarks(REG_NO) {
  let alert = this.alertCtrl.create({
    title: 'New Marks',
    inputs: [
      {
        name: 'Marks',
        type:"number",
        max:100,
        placeholder: '123'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Update',
        handler: data => {
          console.log("Reg_no",REG_NO);
          console.log("Data",data.Marks);
          this.new=data.Marks;
          if(data.Marks!=undefined && data.Marks!="")
          {
            if(data.Marks>=0 && data.Marks<=100)
            {
                    
               this.upMarks['REG']=REG_NO;
               this.upMarks['TEST']=this.TEST;
               this.upMarks['MARKS']=this.new;
               this.UM.UpdateFun(this.upMarks);
               console.log("Updation",this.upMarks);         
             
              }
              else
              {
                 console.log("Marks must be between 0 and 100");
               }
          }
          else
          {
            console.log("Please enter a valid marks.");
          }          
          
        }
      }
    ]
  });
  alert.present();
}


}
