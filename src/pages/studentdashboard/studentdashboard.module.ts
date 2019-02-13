import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentdashboardPage } from './studentdashboard';

@NgModule({
  declarations: [
    StudentdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentdashboardPage),
  ],
})
export class StudentdashboardPageModule {}
