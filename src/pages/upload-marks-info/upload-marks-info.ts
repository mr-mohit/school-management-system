import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { UploadMarksPage } from '../upload-marks/upload-marks';
import { UpdateMarksPage } from '../update-marks/update-marks';
import { ServiceGetResultDataProvider } from '../../providers/service-get-result-data/service-get-result-data';

@IonicPage()
@Component({
  selector: 'page-upload-marks-info',
  templateUrl: 'upload-marks-info.html',
})
export class UploadMarksInfoPage {
   public TOTAL:any;
   public CID:any;
   public SID:any;
   public TID:any;
   public CLASS:any;
   public SUBJECT:any;
   public TEST:any;
   public CTD={
     "CID":"",
     "SID":""
   };


   public INS={
    "CID":"",
    "SID":"",
    "TID":""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider,
    public RD:ServiceGetResultDataProvider) {
  }


  getSubject()
  {
    this.CID=this.CLASS;
    this.SID="";
    this.TID="";
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(this.CID);
  }

  getTest()
  {    
    this.SID=this.SUBJECT;
    this.CTD['CID']= this.CID;
    this.CTD['SID']=this.SID;
    console.log("test id's",this.CTD);
    this.GU.getTestFun(this.CTD);
  }


  Submit(CLASS,SUBJECT,TEST)
{
  if(CLASS!=undefined && SUBJECT!=undefined && TEST!=undefined)
  {
    this.INS['CID']= CLASS;
  this.INS['SID']=SUBJECT;
  this.INS['TID']=TEST;
  console.log("UPLOADING MARKS",this.INS);
  this.GU.getSDCFun(CLASS);
  this.navCtrl.push(UploadMarksPage,{"class":CLASS,"subject":SUBJECT,"test":TEST});
  

  }
  else{
 alert("Please select all fields");
  }
  
  
}
TM(TOTAL)
{
  this.TOTAL=TOTAL;
  console.log(this.TOTAL);
}

Update(CLASS,SUBJECT,TEST)
{
  if(CLASS!=undefined && SUBJECT!=undefined && TEST!=undefined)
  {
  this.INS['CID']= CLASS;
  this.INS['SID']=SUBJECT;
  this.INS['TID']=TEST;
  console.log("Updating Marks",this.INS);
  this.GU.getUploadMarksFun(this.INS);
  this.navCtrl.push(UpdateMarksPage,{"class":CLASS,"subject":SUBJECT,"test":TEST});
  }
  else{
    alert("Please select all the fields");
  }
}

ReData(TEST)
{
  this.RD.getRDFun(TEST);
  
}

reset(){
this.SUBJECT=null;
this.TEST=null;

}
reset_two(){
  this.SUBJECT=null;
  this.TEST=null;
  
  }

  ionViewDidLoad() {
    this.ReData;
  }

}
