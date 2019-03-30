import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: Transfer, private file: File,private fileChooser: FileChooser, private fileOpener: FileOpener,
    private filePath: FilePath,public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,public loadingCtrl: LoadingController,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherUploadHomeworkPage');
  }

  chooseFile()
  {
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolveFilePath=>{
        alert(resolveFilePath);
        this.lastfile = resolveFilePath;
        this.uploadFile(this.lastfile);
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
  
  public uploadFile(file) {
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
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(this.lastfile, url, options).then(data => {
      this.loading.dismissAll()
      alert('Updation successfull');
    }, err => {
      this.loading.dismissAll()
      alert('Error while uploading file.');
    });

    // present toast
  } 


}
