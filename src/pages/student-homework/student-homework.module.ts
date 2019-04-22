import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentHomeworkPage } from './student-homework';

@NgModule({
  declarations: [
    StudentHomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentHomeworkPage),
  ],
})
export class StudentHomeworkPageModule {}
