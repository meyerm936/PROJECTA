import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LngPageRoutingModule } from './lng-routing.module';

import { LngPage } from './lng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LngPageRoutingModule
  ],
  declarations: [LngPage]
})
export class LngPageModule {}
