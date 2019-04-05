import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceLoginProvider } from '../../providers/service-login/service-login';
import { ServiceUploadHomeworkProvider } from '../../providers/service-upload-homework/service-upload-homework';

/**
 * Generated class for the TeacherUploadHomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-upload-homework',
  templateUrl: 'teacher-upload-homework.html',
})
export class TeacherUploadHomeworkPage {

  lastfile: any;
  loading: Loading;
  //here creating object to access file transfer object.  
   private fileTransfer: TransferObject;  
   public classID:any;
   public RegNo:any;
   
   public Infos : any =
   {
      "teacherId" :"" ,
      "class" : "",
      "subject" : "",
      "date" : "",
      "time" : "",
      "file" : "",
   }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: Transfer, private file: File,private fileChooser: FileChooser,
    private fileOpener: FileOpener, public GU:ServiceGetClassMasterProvider,
    private filePath: FilePath,public actionSheetCtrl: ActionSheetController, public service : ServiceUploadHomeworkProvider,
    public toastCtrl: ToastController,public loadingCtrl: LoadingController,
    public alertController: AlertController, public Regserv:ServiceLoginProvider) {

      this.GU.getClassFun();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherUploadHomeworkPage');
  }

  getSubject(Class)
  {
    this.classID=Class;
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(this.classID);
  }

  chooseFile(Class,Subject,DATE,TIME)
  {
      // send class subject infos to INFOS array

      this.Infos['teacherID']=this.Regserv.reg;
      this.Infos['class']=Class;
      this.Infos['subject']=Subject;
      this.Infos['date']=DATE;
      this.Infos['time']=TIME;

      // start choosing the file 
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolveFilePath=>{
        alert(resolveFilePath);
        this.lastfile = resolveFilePath;
          // getting the file name and store into array that we will use to send to the API
              this.Infos['file'] = this.lastfile;
     // getting the file name and store into array that we will use to send to the API
     var a = 0; 
     //alert(this.userInfos["userpic"]);
     for(var index in this.Infos) {

       //check if all the fields have been filled by the admin
       //console.log(this.userInfos[index]);
       if(this.Infos[index] == "")
       {
         // if one field is empty => print an alert 
           alert("empty fields are not allowed / You should fill all the fields properly");
           break;
       }
       else
       {
         a +=1 ; 
       }
     }
     if(a == 6)
     {
      this.ConfirmCreationHomework(this.Infos); 
     }
    
        // this.fileOpener.open(resolveFilePath, 'application/PDF').then(value=>{ 
          
        //   alert("IT WORKS");
        // }).catch(err=>{
        //   alert(JSON.stringify(err));
        // });
      }).catch(err=>{
        alert(JSON.stringify(err));
      });
    }).catch(err=>{
      alert(JSON.stringify(err));
    });
  }
  
  public uploadFile(file) 
  {
    // Destination URL
    var url = "http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/uploadImage.php";
    
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
      this.loading.dismissAll()
      alert('Updation successfull');
    }, err => {
      this.loading.dismissAll()
      alert('Error while uploading file.');
    });

    // present toast
  } 


  public download(fileName) 
  {  
    //here encoding path as encodeURI() format.  
    let url = encodeURI("http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/uploadImage.php/Chanda_kumari_resume.pdf");  
    //here initializing object.  
    this.fileTransfer = this.transfer.create();  
    // here i mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. 
    //You can change a file path whatever pre-defined method.  
     this.fileTransfer.download(url, this.file.externalRootDirectory + fileName, true).then((entry) => {  
        //here logging our success downloaded file path in mobile.  
        alert('download completed: ' + entry.toURL());  
      //  alert('download completed');
    }, (error) => {  
        //here logging our error its easier to find out what type of error occured.  
        console.log('download failed: ' + error);  
        alert('download failed');

    });  
  } 
  
  // confirmation alert
  async ConfirmCreationHomework(a) {
    const alert = await this.alertController.create({
     
      message: 'Message <strong>Do You Want to Upload this HomeWork :</strong>???',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
           // console.log(a);
              this.uploadFile; // upload file into the server
              this.service.postHomework(a); // send the  infos to the provider  
              this.navCtrl.pop();
          }
        }
      ]
    });

    await alert.present();
  }
}
