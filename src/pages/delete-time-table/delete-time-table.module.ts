import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteTimeTablePage } from './delete-time-table';

@NgModule({
  declarations: [
    DeleteTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteTimeTablePage),
  ],
})
export class DeleteTimeTablePageModule {}
