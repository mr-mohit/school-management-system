import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAnnouncementPage } from './teacher-announcement';

@NgModule({
  declarations: [
    TeacherAnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAnnouncementPage),
  ],
})
export class TeacherAnnouncementPageModule {}
