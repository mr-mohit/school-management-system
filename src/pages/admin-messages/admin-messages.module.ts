import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminMessagesPage } from './admin-messages';

@NgModule({
  declarations: [
    AdminMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminMessagesPage),
  ],
})
export class AdminMessagesPageModule {}
