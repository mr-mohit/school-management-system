import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCalendarPage } from './view-calendar';

@NgModule({
  declarations: [
    ViewCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCalendarPage),
  ],
})
export class ViewCalendarPageModule {}
