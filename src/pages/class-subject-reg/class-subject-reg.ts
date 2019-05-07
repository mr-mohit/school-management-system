import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceClassSubjectRegProvider } from '../../providers/service-class-subject-reg/service-class-subject-reg';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';


declare var cordova: any;


@IonicPage()
@Component({
  selector: 'page-class-subject-reg',
  templateUrl: 'class-subject-reg.html',
})
export class ClassSubjectRegPage {
  public CLASS:any;
  public SUBJECT:any;
  public csrData =
  {
    "CLASS":"",
    "SUBJECT":"",
    "FILE":""
  };

  lastfile: any;
  loading: Loading;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cid:ServiceGetClassMasterProvider,public alertCtrl:AlertController,
    public CSR:ServiceClassSubjectRegProvider,private transfer: Transfer,public loadingCtrl: LoadingController, 
    private file: File,private fileChooser: FileChooser,private filePath: FilePath) {
      
  }




// method help to choose the file
chooseFile(CLASS,SUBJECT)
  {
     
   // send infos to the array to be send.
    this.csrData['CLASS']= CLASS;
    this.csrData['SUBJECT']= SUBJECT;

      // start choosing the file 
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolveFilePath=>{
        //alert(resolveFilePath);
        this.lastfile = resolveFilePath;
          // getting the file name and store into array that we will use to send to the API
          var currentName = this.lastfile.substr(this.lastfile.lastIndexOf('/') + 1);
              this.csrData['FILE'] = currentName;
             


       //check if all the fields have been filled by the admin
       //console.log(this.userInfos[index]);
       if(this.csrData['CLASS'] && this.csrData['SUBJECT'] && this.csrData['FILE'])
       {
         //  this.Submit(this.csrData); 
          
       }
       else
       { 
         // if one field is empty => print an alert 
         alert("empty fields are not allowed / You should fill all the fields properly");
       }
    
    
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
    }).catch(err=>{
      alert(JSON.stringify(err));
    });
  }


  //Upload file into the server
  public uploadFile(file,a) 
  {
    // Destination URL
    var url = "http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/uploadSyllabus.php";
 
    
     var options = {
      fileKey: "file",
      fileName: file,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': file}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the file
    fileTransfer.upload(this.lastfile, url, options).then(data => {
      this.loading.dismissAll();

      console.log("sending data",a);
      this.CSR.addCSR(a); // send data to provider
     // this.service.postHomework(a); // send the  infos to the provider  
      this.navCtrl.pop();
    }, err => {
      this.loading.dismissAll()
      alert("Failed to upload file");
    });

    // present toast
  } 

// method call when we want to add a subject to a class
  Submit(data) 
  {
 
    if(data)
    {
      const confirm = this.alertCtrl.create({
        title: 'Register Subject under Class?',
        message: 'Do you want to register ?',
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
                          // this.CLASS=CLASS;
                          // this.SUBJECT=SUBJECT;            
                          // console.log("sending data",this.csrData);
                           //this.CSR.addCSR(this.csrData);
                          this.uploadFile(this.lastfile,this.csrData); // upload file into the server

                          }
          }
      ]
    });
    confirm.present();

    }
    else{
      alert("please fill required fields");
    }

  }

}
