import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { ChangePasswordPage } from '../change-password/change-password';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  testRadioOpen: boolean;
  testRadioResult;
  public checkFlagEn:boolean=false;
  public checkFlagFr:boolean=false;
  public language:any;
  constructor(public storage: NativeStorage ,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public translate:TranslateService) {
  }

  ChangePassword()
  {
    this.navCtrl.push(ChangePasswordPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.storage.getItem('languageInfo')
    .then(
      data1 => {let lang=data1.Language;
                if(lang=='fr'){
                  this.checkFlagFr=true;
                }
                else{
                   this.checkFlagEn=true;
                 }
                },
      error => {console.error(error)}
    
    );
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Language');

    alert.addInput({
      type: 'radio',
      label: 'English',
      value: 'en',
      checked: this.checkFlagEn
    });
    alert.addInput({
      type: 'radio',
      label: 'Français',
      value: 'fr',
      checked: this.checkFlagFr
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.language=data;
        if(data=='fr'){
            this.translate.use('fr');
        }else{
          this.translate.use('en');
        }
        this.storage.setItem('languageInfo', {Language: data })        
  .then(
    () => console.log('Stored item - '+data),
    error => console.error('Error storing item', error)
  );
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
});
  }
}
