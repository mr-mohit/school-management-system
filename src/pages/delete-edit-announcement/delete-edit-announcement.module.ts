import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteEditAnnouncementPage } from './delete-edit-announcement';

@NgModule({
  declarations: [
    DeleteEditAnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteEditAnnouncementPage),
  ],
})
export class DeleteEditAnnouncementPageModule {}
