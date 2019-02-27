import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentTimeTablePage } from './student-time-table';

@NgModule({
  declarations: [
    StudentTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentTimeTablePage),
  ],
})
export class StudentTimeTablePageModule {}
