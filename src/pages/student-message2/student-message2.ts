import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentMessage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-message2',
  templateUrl: 'student-message2.html',
})
export class StudentMessage2Page {

  public value:any;
  public A_ID:any;
  public TITLE:any;
  public FIRST_NAME:any;
  public LAST_NAME:any;
  public DESCRIPTION:any;
  public DATE:any;
  public TIME:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.value = navParams.get('item');

    this.TITLE=this.value.TITLE;
    this.FIRST_NAME=this.value.FIRST_NAME;
    this.LAST_NAME=this.value.LAST_NAME;
    this.DESCRIPTION=this.value.DESCRIPTION;
    this.DATE=this.value.DATE;
    this.TIME=this.value.TIME;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentMessage2Page');
  }

}
