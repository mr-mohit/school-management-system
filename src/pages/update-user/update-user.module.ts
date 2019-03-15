import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUserPage } from './update-user';

@NgModule({
  declarations: [
    UpdateUserPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateUserPage),
  ],
})
export class UpdateUserPageModule {}
