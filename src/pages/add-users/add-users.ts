import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, Loading, Platform, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceAdduserProvider } from '../../providers/service-adduser/service-adduser';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { ServiceViewSessionProvider } from '../../providers/service-view-session/service-view-session';

declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-add-users',
  templateUrl: 'add-users.html',
})
export class AddUsersPage {

 public  myDate: string = new Date().toISOString();



  @ViewChild('signupSlider') signupSlider: any;


  lastImage: string = null;
  loading: Loading;


  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;
  slideFourForm: FormGroup;

  submitAttempt: boolean = false;

  userInfos =
  {
     "userpic":"a",
     "userRegNo":"",
     "userfirstname":"",
     "userlastname":"",
     "userrole":"",
     "userdob":"",
     "usergender":"",
     "useremail":"",
     "userpassword":"",
     "userfathername":"",
     "usermothername":"",
     "usercity":"",
     "useraddresstype":"",
     "useraddress1":"",
     "useraddress2":"",
     "userstate":"",
     "userpincode":"",
     "usercontact":"",
     "date":"",
     "studentclass":"c",
     "studentsection":"s",
     "studentsession":0,
     "teacherdesgn":"t",
     "teacherdepart":"d",

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public formBuilder: FormBuilder, public service:ServiceAdduserProvider,
              public getSession:ServiceViewSessionProvider,
              private camera: Camera, private transfer: Transfer, private file: File,
              private filePath: FilePath,public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,public loadingCtrl: LoadingController,
              public alertController: AlertController,public cid:ServiceGetClassMasterProvider) {

                console.log("date is ",this.myDate);
  
    // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
     //userid: [''],
     // userpic: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userfirstname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userlastname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userrole: ['', Validators.compose([Validators.pattern('[a-zA-Z ]+'), Validators.required])],
      userdob: ['', Validators.compose([ Validators.required])],
      usergender: ['', Validators.compose([Validators.pattern('[a-zA-Z ]+'), Validators.required])],
     
    });
    // this slide is used to enter basics infos of the user
    this.slideTwoForm = formBuilder.group({
      useremail: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      userpassword: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,35}$'), Validators.required])],
      userpassword2: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,35}$'), Validators.required])],
      userfathername: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usermothername: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usercity: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
     
    });

    // this slide is used to enter infos address of the user
    this.slideThreeForm = formBuilder.group({
        addressType: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address1: ['', Validators.compose([Validators.maxLength(100),Validators.required])],
        address2: ['', Validators.compose([Validators.maxLength(100),Validators.required])],
        state: ['', Validators.compose([Validators.maxLength(100),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pincode: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6}')])],
        contact: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{8,15}')])]  
    });
    
    // this slide is used to enter infos address of the user
    this.slideFourForm = formBuilder.group({
      studentClass: ['', Validators.compose([Validators.maxLength(30),Validators.required])],
      studentSection: ['', Validators.compose([Validators.maxLength(30),Validators.required])],
      studentSession: ['', Validators.compose([Validators.maxLength(30),Validators.required])],
      teacherDepart: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
      teacherDesg: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
    });
  
    // reset the user ID
    this.service.userID = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUsersPage');
  }
  // getUserAddress()
  // {
  //   this.navCtrl.push(UserAddressPage);
  // }

  next(){
    this.signupSlider.slideNext();
    }

    prev(){
        this.signupSlider.slidePrev();
    }
   //get the user id 
    getID()
    {
      this.service.userID = "";
     console.log(this.slideOneForm.getRawValue().userrole);
      if(this.slideOneForm.getRawValue().userrole =="")
      {
         alert("Please select either of the roles");
      }
      else
      {
        this.service.getID(this.slideOneForm.getRawValue().userrole);
      }
    }

  save()
  {
    // console.log("class",this.slideFourForm.getRawValue().studentClass);
    // console.log("section",this.slideFourForm.getRawValue().studentSection);
    // console.log("Session",this.slideFourForm.getRawValue().studentSession);
     if(this.slideOneForm.valid && this.slideTwoForm.valid && this.slideThreeForm.valid)
     {
      if(this.slideTwoForm.getRawValue().userpassword == this.slideTwoForm.getRawValue().userpassword2)
      {
         // this.userInfos["userpic"] = this.slideOneForm.getRawValue().userpic;
         
         this.userInfos["date"] =  this.myDate;

          this.userInfos["userRegNo"] = this.service.userID;
          this.userInfos["userfirstname"] = this.slideOneForm.getRawValue().userfirstname;
          this.userInfos["userlastname"] = this.slideOneForm.getRawValue().userlastname;
          this.userInfos["userrole"] = this.slideOneForm.getRawValue().userrole;
          this.userInfos["userdob"] =  this.slideOneForm.getRawValue().userdob;
          this.userInfos["usergender"] =  this.slideOneForm.getRawValue().usergender;
          this.userInfos["useremail"] = this.slideTwoForm.getRawValue().useremail;
          this.userInfos["userpassword"] = this.slideTwoForm.getRawValue().userpassword;
          this.userInfos["userfathername"] =  this.slideTwoForm.getRawValue().userfathername;
          this.userInfos["usermothername"] =  this.slideTwoForm.getRawValue().usermothername;
          this.userInfos["usercity"] =  this.slideTwoForm.getRawValue().usercity;

          this.userInfos["useraddresstype"] =  this.slideThreeForm.getRawValue().addressType;
          this.userInfos["useraddress1"] =  this.slideThreeForm.getRawValue().address1;
          this.userInfos["useraddress2"] =  this.slideThreeForm.getRawValue().address2;
          this.userInfos["userstate"] =  this.slideThreeForm.getRawValue().state;
          this.userInfos["userpincode"] =  this.slideThreeForm.getRawValue().pincode;
          this.userInfos["usercontact"] =  this.slideThreeForm.getRawValue().contact;

         

          if(this.userInfos["userrole"] =="student" && this.slideFourForm.controls.studentClass.valid &&
             this.slideFourForm.controls.studentSession.valid && this.slideFourForm.controls.studentSection.valid)
          {
              this.userInfos["studentclass"] = this.slideFourForm.getRawValue().studentClass;
              this.userInfos["studentsection"] = this.slideFourForm.getRawValue().studentSection;
              this.userInfos["studentsession"] = this.slideFourForm.getRawValue().studentSession;
          }
          // in case of teacher
          else if(this.userInfos["userrole"] == "teacher" && this.slideFourForm.controls.teacherDepart.valid && this.slideFourForm.controls.teacherDesg.valid)
          {
              this.userInfos["teacherdepart"] = this.slideFourForm.getRawValue().teacherDepart;
              this.userInfos["teacherdesg"] = this.slideFourForm.getRawValue().teacherDesg;
          }
          else
          {
              if(this.userInfos["userrole"] == "teacher")
              {
                this.userInfos["teacherdepart"] = "";
                this.userInfos["teacherdesg"] = "";
                alert("Please select an appropirate designation or departement for teacher");
              }
              else
              {
                this.userInfos["studentclass"] ="";
                this.userInfos["studentsection"]= "";
                this.userInfos["studentsession"]= 0;
                 alert("Please select a valid class/section/session for the student");
              }
              
          }
          var a = 0; 
          //alert(this.userInfos["userpic"]);
          for(var index in this.userInfos) {

            //check if all the fields have been filled by the admin
            //console.log(this.userInfos[index]);
            if(this.userInfos[index] == "")
            {
              // if one field is empty => print an alert 
                alert("Empty fields are not allowed / You should fill all the fields properly");
                break;
            }
            else
            {
              a +=1 ; 
            }
          }
          // here we check if all the fields have been filled
          //alert(a);
          if(a == 24 && this.lastImage !==  null)
          {
            this.userInfos['userpic'] = this.lastImage;
            //this.uploadImage(); // upload image in the server
            //this.service.postuser(this.userInfos); // send the user infos to the provider 
            this.ConfirmCreationUser(this.userInfos); 
          }
          else if(this.lastImage ===  null)
          {
            alert("Select an image from your gallery");
            
          }
            
      }
      else{
          alert("Password and confirmation password do not match");
      }
     }
     else
     {
      alert('Please fill all the fields properly, some of them are not valid');
     }   
      

  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////
 // ask the user to find image from camera or gallery
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  // takePicture 
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 9000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  // upload image to the server
  public uploadImage() {
    // Destination URL
    var url = "http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/uploadImage.php";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   

   // this.presentToast(targetPath);
    
    // File name only
    var filename = this.lastImage; // this.presentToast(filename);
    this.userInfos['userpic']= filename; // file name 
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file');
    });
  } 

  // confirmation alert
  async ConfirmCreationUser(a) {
    const alert = await this.alertController.create({
     
      message: 'Message <strong>Do you want to create this user?</strong>',
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
              this.uploadImage(); // upload image in the server
              this.service.postuser(a); // send the user infos to the provider  
              this.navCtrl.pop();
          }
        }
      ]
    });

    await alert.present();
  }



  selectSection(classId)
  {
    console.log("Class id ",classId);
  this.cid.getSectionFun(classId);
  }


}
