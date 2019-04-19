import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateAttendancePage } from './update-attendance';

@NgModule({
  declarations: [
    UpdateAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateAttendancePage),
  ],
})
export class UpdateAttendancePageModule {}
