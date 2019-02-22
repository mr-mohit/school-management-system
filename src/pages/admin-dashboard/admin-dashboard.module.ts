import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDashboardPage } from './admin-dashboard';

@NgModule({
  declarations: [
    AdminDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDashboardPage),
  ],
})
export class AdminDashboardPageModule {}
