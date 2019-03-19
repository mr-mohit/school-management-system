import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTimetablePage } from './add-timetable';

@NgModule({
  declarations: [
    AddTimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTimetablePage),
  ],
})
export class AddTimetablePageModule {}
