import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherFeedbackPage } from './teacher-feedback';

@NgModule({
  declarations: [
    TeacherFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherFeedbackPage),
  ],
})
export class TeacherFeedbackPageModule {}
