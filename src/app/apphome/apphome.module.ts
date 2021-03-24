import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApphomePageRoutingModule } from './apphome-routing.module';

import { ApphomePage } from './apphome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApphomePageRoutingModule
  ],
  declarations: [ApphomePage]
})
export class ApphomePageModule {}
