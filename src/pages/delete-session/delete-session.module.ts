import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteSessionPage } from './delete-session';

@NgModule({
  declarations: [
    DeleteSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteSessionPage),
  ],
})
export class DeleteSessionPageModule {}
