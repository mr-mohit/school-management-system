import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

}
