import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentFeedbackPage } from './student-feedback';

@NgModule({
  declarations: [
    StudentFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentFeedbackPage),
  ],
})
export class StudentFeedbackPageModule {}
