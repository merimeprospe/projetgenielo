import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayjobPageRoutingModule } from './displayjob-routing.module';

import { DisplayjobPage } from './displayjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayjobPageRoutingModule
  ],
  declarations: [DisplayjobPage]
})
export class DisplayjobPageModule {}
