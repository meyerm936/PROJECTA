import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetroleumPageRoutingModule } from './petroleum-routing.module';

import { PetroleumPage } from './petroleum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetroleumPageRoutingModule
  ],
  declarations: [PetroleumPage]
})
export class PetroleumPageModule {}
