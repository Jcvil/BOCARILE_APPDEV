import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentPagePageRoutingModule } from './assignment-page-routing.module';

import { AssignmentPagePage } from './assignment-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentPagePageRoutingModule
  ],
  declarations: [AssignmentPagePage]
})
export class AssignmentPagePageModule {}
