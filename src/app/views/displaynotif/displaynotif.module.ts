import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplaynotifPageRoutingModule } from './displaynotif-routing.module';

import { DisplaynotifPage } from './displaynotif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaynotifPageRoutingModule
  ],
  declarations: [DisplaynotifPage]
})
export class DisplaynotifPageModule {}
