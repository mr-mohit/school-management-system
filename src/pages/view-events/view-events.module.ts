import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewEventsPage } from './view-events';

@NgModule({
  declarations: [
    ViewEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewEventsPage),
  ],
})
export class ViewEventsPageModule {}
