import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentResultPage } from './student-result';

@NgModule({
  declarations: [
    StudentResultPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentResultPage),
  ],
})
export class StudentResultPageModule {}
