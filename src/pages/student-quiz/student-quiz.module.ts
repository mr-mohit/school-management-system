import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentQuizPage } from './student-quiz';

@NgModule({
  declarations: [
    StudentQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentQuizPage),
  ],
})
export class StudentQuizPageModule {}
