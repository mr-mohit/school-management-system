import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementDetailsPage } from './announcement-details';

@NgModule({
  declarations: [
    AnnouncementDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementDetailsPage),
  ],
})
export class AnnouncementDetailsPageModule {}
