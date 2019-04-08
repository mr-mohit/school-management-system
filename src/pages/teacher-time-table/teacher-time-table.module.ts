import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherTimeTablePage } from './teacher-time-table';

@NgModule({
  declarations: [
    TeacherTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherTimeTablePage),
  ],
})
export class TeacherTimeTablePageModule {}
