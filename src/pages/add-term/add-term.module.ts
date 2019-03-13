import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTermPage } from './add-term';

@NgModule({
  declarations: [
    AddTermPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTermPage),
  ],
})
export class AddTermPageModule {}
