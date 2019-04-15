import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteAnnouncementsPage } from './delete-announcements';

@NgModule({
  declarations: [
    DeleteAnnouncementsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteAnnouncementsPage),
  ],
})
export class DeleteAnnouncementsPageModule {}
