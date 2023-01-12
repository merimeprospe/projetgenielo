import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobofferPageRoutingModule } from './joboffer-routing.module';

import { JobofferPage } from './joboffer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobofferPageRoutingModule
  ],
  declarations: [JobofferPage]
})
export class JobofferPageModule {}
