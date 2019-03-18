import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSubjectsPage } from './view-subjects';

@NgModule({
  declarations: [
    ViewSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewSubjectsPage),
  ],
})
export class ViewSubjectsPageModule {}
