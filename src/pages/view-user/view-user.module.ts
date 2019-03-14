import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewUserPage } from './view-user';

@NgModule({
  declarations: [
    ViewUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewUserPage),
  ],
})
export class ViewUserPageModule {}
