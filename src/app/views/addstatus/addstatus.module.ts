import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstatusPageRoutingModule } from './addstatus-routing.module';

import { AddstatusPage } from './addstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstatusPageRoutingModule
  ],
  declarations: [AddstatusPage]
})
export class AddstatusPageModule {}
