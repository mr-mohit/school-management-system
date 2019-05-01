import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentSyllabusPage } from './student-syllabus';

@NgModule({
  declarations: [
    StudentSyllabusPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentSyllabusPage),
  ],
})
export class StudentSyllabusPageModule {}
