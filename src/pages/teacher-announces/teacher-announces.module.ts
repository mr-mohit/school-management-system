import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAnnouncesPage } from './teacher-announces';

@NgModule({
  declarations: [
    TeacherAnnouncesPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAnnouncesPage),
  ],
})
export class TeacherAnnouncesPageModule {}
