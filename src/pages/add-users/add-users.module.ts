import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUsersPage } from './add-users';

@NgModule({
  declarations: [
    AddUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(AddUsersPage),
  ],
})
export class AddUsersPageModule {}
