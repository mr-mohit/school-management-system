import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAnnouncementsPage } from './admin-announcements';

@NgModule({
  declarations: [
    AdminAnnouncementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAnnouncementsPage),
  ],
})
export class AdminAnnouncementsPageModule {}
