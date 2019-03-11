import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Loading, ActionSheetController, ToastController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { ServiceUpdateUserProvider } from '../../providers/service-update-user/service-update-user';
import { ServiceViewUserProvider } from '../../providers/service-view-user/service-view-user';

/**
 * Generated class for the UpdateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@Component({
  selector: 'page-update-user',
  templateUrl: 'update-user.html',
})
export class UpdateUserPage {


  @ViewChild('signupSlider') signupSlider: any;


  lastImage: string = null;
  loading: Loading;


  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;
  slideFourForm: FormGroup;
 
  public Reg_No: any;

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

  }
  
  



  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
              public formBuilder: FormBuilder, public service:ServiceViewUserProvider, public serviceUpdate:ServiceUpdateUserProvider,
              private camera: Camera, private transfer: Transfer, private file: File,
              private filePath: FilePath,public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,public loadingCtrl: LoadingController,
              public alertController: AlertController) {

                 // this slide is used to enter basics infos of the user
    this.slideOneForm = formBuilder.group({
      userid: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6,9}')])],
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
        address1: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        address2: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        state: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('[a-zA-Z]*')])],
        pincode: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{6}')])],
        contact: ['', Validators.compose([Validators.maxLength(30),Validators.required, Validators.pattern('(?=.*[0-9]).{8,15}')])]  
    });
    
    // this slide is used to enter infos address of the user
    this.slideFourForm = formBuilder.group({
 
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserPage');
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
     console.log(this.slideOneForm.getRawValue().userrole);
      if(this.slideOneForm.getRawValue().userrole =="")
      {
         alert("please select one user role ");
      }
      else
      {
       // this.service.getID(this.slideOneForm.getRawValue().userrole);
      }
    }

  save()
  {
     if(this.slideOneForm.valid && this.slideTwoForm.valid && this.slideThreeForm.valid)
     {
      if(this.slideTwoForm.getRawValue().userpassword == this.slideTwoForm.getRawValue().userpassword2)
      {
         // this.userInfos["userpic"] = this.slideOneForm.getRawValue().userpic;
        //  this.userInfos["userRegNo"] = this.service.userID;
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

          var a = 0; 
          //alert(this.userInfos["userpic"]);
          for(var index in this.userInfos) {

            //check if all the fields have been filled by the admin
            //console.log(this.userInfos[index]);
            if(this.userInfos[index] == "")
            {
              // if one field is empty => print an alert 
                alert(" You should fill all the fields properly / empty fields are not allowed");
                break;
            }
            else
            {
              a +=1 ; 
            }
          }
          // here we check if all the fields have been filled
          if(a == 18 && this.lastImage!==  null)
          {
            this.userInfos['userpic']= this.lastImage;
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
          alert("password and confirmation password are not matching");
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
    var url = "http://localhost/schoolapi/uploadImage.php";
   
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
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  } 

  // confirmation alert
  async ConfirmCreationUser(a) {
    const alert = await this.alertController.create({
     
      message: 'Message <strong>Do You Want toCreate This user :</strong>!!!',
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
             // this.service.postuser(a); // send the user infos to the provider  
              this.navCtrl.pop();
          }
        }
      ]
    });

    await alert.present();
  }

  // view user infos before updation
  //get user infos
UserInfos()
{
   
  if(this.slideOneForm.controls.userid.valid)
  {
    // here we send the reg_No
    this.service.postUserID(this.slideOneForm.getRawValue().userid).then((data:any)=>{
      console.log("data coming in reponse",data.data[0]['FIRST_NAME'], typeof data);
      //this.slideOneForm.controls.userfirstname=data.data[0]['FIRST_NAME'];

      this.Reg_No=data.data[0]['REG_NO'];
      
      this.slideOneForm.controls.userfirstname.setValue( data.data[0]['FIRST_NAME']);
      this.slideOneForm.controls.userlastname.setValue( data.data[0]['LAST_NAME']);
      this.slideOneForm.controls.usergender.setValue( data.data[0]['GENDER']);
      this.slideOneForm.controls.userrole.setValue( data.data[0]['ROLE']);
      this.slideOneForm.controls.userdob.setValue( data.data[0]['DOB']);
      this.slideTwoForm.controls.useremail.setValue(data.data[0]['E_MAIL']);
      this.slideTwoForm.controls.userpassword.setValue(data.data[0]['PASSWORD']);
      this.slideTwoForm.controls.userpassword2.setValue(data.data[0]['PASSWORD']);
      this.slideTwoForm.controls.userfathername.setValue(data.address[0]['FATHER_NAME']);
      this.slideTwoForm.controls.usermothername.setValue(data.address[0]['MOTHER_NAME']);
      this.slideTwoForm.controls.usercity.setValue(data.address[0]['CITY']);
      this.slideThreeForm.controls.addressType.setValue(data.address[0]['ADDRESS_TYPE']);
      this.slideThreeForm.controls.address1.setValue(data.address[0]['ADDRESS_LINE_1']);
      this.slideThreeForm.controls.address2.setValue(data.address[0]['ADDRESS_LINE_2']);
      this.slideThreeForm.controls.state.setValue(data.address[0]['STATE']);
      this.slideThreeForm.controls.pincode.setValue(data.address[0]['PINCODE']);
      this.slideThreeForm.controls.contact.setValue(data.address[0]['CONTACT_NO']);
    
   
    })
  }
  else
  {
    alert("enter a valid Registration ID");
  }  
}

}
