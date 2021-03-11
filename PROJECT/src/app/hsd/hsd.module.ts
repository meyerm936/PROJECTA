import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HsdPageRoutingModule } from './hsd-routing.module';

import { HsdPage } from './hsd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HsdPageRoutingModule
  ],
  declarations: [HsdPage]
})
export class HsdPageModule {}
