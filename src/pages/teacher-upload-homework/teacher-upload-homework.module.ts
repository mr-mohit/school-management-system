import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherUploadHomeworkPage } from './teacher-upload-homework';

@NgModule({
  declarations: [
    TeacherUploadHomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherUploadHomeworkPage),
  ],
})
export class TeacherUploadHomeworkPageModule {}
