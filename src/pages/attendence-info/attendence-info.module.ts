import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendenceInfoPage } from './attendence-info';

@NgModule({
  declarations: [
    AttendenceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendenceInfoPage),
  ],
})
export class AttendenceInfoPageModule {}
