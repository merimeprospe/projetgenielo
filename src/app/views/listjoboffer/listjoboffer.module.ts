import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListjobofferPageRoutingModule } from './listjoboffer-routing.module';

import { ListjobofferPage } from './listjoboffer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListjobofferPageRoutingModule
  ],
  declarations: [ListjobofferPage]
})
export class ListjobofferPageModule {}
