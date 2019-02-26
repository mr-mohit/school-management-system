import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAnnouncementsPage } from './student-announcements';

@NgModule({
  declarations: [
    StudentAnnouncementsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAnnouncementsPage),
  ],
})
export class StudentAnnouncementsPageModule {}
