import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteClassPage } from './delete-class';

@NgModule({
  declarations: [
    DeleteClassPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteClassPage),
  ],
})
export class DeleteClassPageModule {}
