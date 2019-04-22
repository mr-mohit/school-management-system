import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceStudentHomeworkProvider } from '../../providers/service-student-homework/service-student-homework';
import { getUrlScheme } from '@angular/compiler';
import { TransferObject, Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the StudentHomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-homework',
  templateUrl: 'student-homework.html',
})
export class StudentHomeworkPage {

  public HW : any = [];  // get the homework of the subject
  private fileTransfer: TransferObject;  //used transfert data from server to mobile 


  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File,
               public GU:ServiceStudentHomeworkProvider,private transfer: Transfer,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomeworkPage');
  }

  // download the corresponding homework
  downloadHomework(link,title,subject)
  {
      //console.log("download part");
       //here encoding path as encodeURI() format.  
       var fileName = subject+title+".pdf";
       alert(link);
    let url = encodeURI(link);  
    //here initializing object.  
    this.fileTransfer = this.transfer.create();  
    // here i mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. 
    //You can change a file path whatever pre-defined method.  
     this.fileTransfer.download(url, this.file.externalRootDirectory  + fileName, true).then((entry) => {  
        //here logging our success downloaded file path in mobile.  
        alert(fileName +' -- > download completed: ' + entry.toURL());  
      //  alert('download completed');
    }, (error) => {  
        //here logging our error its easier to find out what type of error occured.  
        console.log('download failed: ' + error);  
        alert('download failed'+ error);

    });  
  }

// select the homework values corresponding to the subject selected
  getSubject(subject)
  {
     
     for( var i in  this.GU.classHW)
     {
         if(this.GU.classHW[i].SUBJECT_ID === subject )
         {
            this.HW.push(this.GU.classHW[i]); 
         }
     }
     console.log("selected subject : ", this.HW);
  }

}
