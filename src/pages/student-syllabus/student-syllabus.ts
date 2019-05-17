import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { ServiceSyllabusProvider } from '../../providers/service-syllabus/service-syllabus';
import { File } from '@ionic-native/file';

/**
 * Generated class for the StudentSyllabusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-syllabus',
  templateUrl: 'student-syllabus.html',
})
export class StudentSyllabusPage {
  // postSyllFun
  public subjectId:any;
  public subjectName:any;
  public subjectMat:any;

 
  public HW : any = [];  // get the syllabus of the subject
  private fileTransfer: TransferObject;  //used transfert data from server to mobile  
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private file: File,public GU:ServiceSyllabusProvider,private transfer: Transfer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentSyllabusPage');
  }

   //download the corresponding syllabus
   downloadHomework(link,title,subject)
   {
       //console.log("download part");
        //here encoding path as encodeURI() format.  
        var fileName = subject+title+"_Syllabus.pdf";
       // alert(link);
     let url = encodeURI(link);  
     //here initializing object.  
     this.fileTransfer = this.transfer.create();  
     // here i mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. 
     //You can change a file path whatever pre-defined method.  
      this.fileTransfer.download(url, this.file.externalRootDirectory + fileName, true).then((entry) => {  
         //here logging our success downloaded file path in mobile.  
         alert('Download complete' + entry.toURL());  
       //  alert('download completed');
     }, (error) => {  
         //here logging our error its easier to find out what type of error occured.  
         console.log('Download failed' + error);  
         alert('Download failed'+ error);
 
     });  
   }
 
 //select the Syllabus values corresponding to the subject selected
   getSubject(subject)
   {
     
    
    for( var j in this.HW)
    {

           this.HW.pop(); 
    }

      for( var i in this.GU.classSYL)
      {
          if(this.GU.classSYL[i].SUBJECT_ID === subject)
          {
             this.HW.push(this.GU.classSYL[i]); 
          }
      }
      console.log("selected subject : ", this.HW);
   }


}
