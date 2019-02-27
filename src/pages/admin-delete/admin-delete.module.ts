import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDeletePage } from './admin-delete';

@NgModule({
  declarations: [
    AdminDeletePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDeletePage),
  ],
})
export class AdminDeletePageModule {}
