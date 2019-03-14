import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteSubjectsPage } from './delete-subjects';

@NgModule({
  declarations: [
    DeleteSubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteSubjectsPage),
  ],
})
export class DeleteSubjectsPageModule {}
