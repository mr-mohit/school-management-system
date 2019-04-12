import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewStudentsPage } from './view-students';

@NgModule({
  declarations: [
    ViewStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewStudentsPage),
  ],
})
export class ViewStudentsPageModule {}
