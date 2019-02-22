import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminViewPage } from './admin-view';

@NgModule({
  declarations: [
    AdminViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminViewPage),
  ],
})
export class AdminViewPageModule {}
