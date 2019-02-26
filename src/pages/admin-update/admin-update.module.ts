import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminUpdatePage } from './admin-update';

@NgModule({
  declarations: [
    AdminUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminUpdatePage),
  ],
})
export class AdminUpdatePageModule {}
