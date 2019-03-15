import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteTermPage } from './delete-term';

@NgModule({
  declarations: [
    DeleteTermPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteTermPage),
  ],
})
export class DeleteTermPageModule {}
