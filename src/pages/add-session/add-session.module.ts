import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSessionPage } from './add-session';

@NgModule({
  declarations: [
    AddSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSessionPage),
  ],
})
export class AddSessionPageModule {}
