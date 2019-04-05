import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadMarksPage } from './upload-marks';

@NgModule({
  declarations: [
    UploadMarksPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadMarksPage),
  ],
})
export class UploadMarksPageModule {}
