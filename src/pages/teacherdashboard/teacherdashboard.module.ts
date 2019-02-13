import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherdashboardPage } from './teacherdashboard';

@NgModule({
  declarations: [
    TeacherdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherdashboardPage),
  ],
})
export class TeacherdashboardPageModule {}
