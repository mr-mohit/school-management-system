import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubjectsPage } from './add-subjects';

@NgModule({
  declarations: [
    AddSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubjectsPage),
  ],
})
export class AddSubjectsPageModule {}
