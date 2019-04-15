import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignSubPage } from './assign-sub';

@NgModule({
  declarations: [
    AssignSubPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignSubPage),
  ],
})
export class AssignSubPageModule {}
