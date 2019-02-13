import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentHomePage } from './parent-home';

@NgModule({
  declarations: [
    ParentHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ParentHomePage),
  ],
})
export class ParentHomePageModule {}
