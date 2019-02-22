import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherSendMessagePage } from './teacher-send-message';

@NgModule({
  declarations: [
    TeacherSendMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherSendMessagePage),
  ],
})
export class TeacherSendMessagePageModule {}
