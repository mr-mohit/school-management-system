import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkAttendancePage } from './mark-attendance';

@NgModule({
  declarations: [
    MarkAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(MarkAttendancePage),
  ],
})
export class MarkAttendancePageModule {}
