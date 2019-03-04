import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAttendancePage } from './student-attendance';

@NgModule({
  declarations: [
    StudentAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAttendancePage),
  ],
})
export class StudentAttendancePageModule {}
