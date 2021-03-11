import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LpgPageRoutingModule } from './lpg-routing.module';

import { LpgPage } from './lpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LpgPageRoutingModule
  ],
  declarations: [LpgPage]
})
export class LpgPageModule {}
