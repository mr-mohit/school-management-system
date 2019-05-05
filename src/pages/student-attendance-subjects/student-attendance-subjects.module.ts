import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAttendanceSubjectsPage } from './student-attendance-subjects';

@NgModule({
  declarations: [
    StudentAttendanceSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAttendanceSubjectsPage),
  ],
})
export class StudentAttendanceSubjectsPageModule {}
