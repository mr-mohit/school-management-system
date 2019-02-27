import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddPage } from './admin-add';

@NgModule({
  declarations: [
    AdminAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddPage),
  ],
})
export class AdminAddPageModule {}
