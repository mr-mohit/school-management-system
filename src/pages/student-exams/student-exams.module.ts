import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentExamsPage } from './student-exams';

@NgModule({
  declarations: [
    StudentExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentExamsPage),
  ],
})
export class StudentExamsPageModule {}
