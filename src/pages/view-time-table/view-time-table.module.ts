import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTimeTablePage } from './view-time-table';

@NgModule({
  declarations: [
    ViewTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewTimeTablePage),
  ],
})
export class ViewTimeTablePageModule {}
