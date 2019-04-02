import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadMarksInfoPage } from './upload-marks-info';

@NgModule({
  declarations: [
    UploadMarksInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadMarksInfoPage),
  ],
})
export class UploadMarksInfoPageModule {}
