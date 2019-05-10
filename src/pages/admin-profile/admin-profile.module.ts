import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProfilePage } from './admin-profile';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    AdminProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProfilePage),
    IonicImageLoader,
  ],
})
export class AdminProfilePageModule {}
