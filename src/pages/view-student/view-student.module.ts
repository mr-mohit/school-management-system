import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewStudentPage } from './view-student';

@NgModule({
  declarations: [
    ViewStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewStudentPage),
  ],
})
export class ViewStudentPageModule {}
