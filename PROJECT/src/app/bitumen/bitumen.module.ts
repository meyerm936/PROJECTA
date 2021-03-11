import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitumenPageRoutingModule } from './bitumen-routing.module';

import { BitumenPage } from './bitumen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitumenPageRoutingModule
  ],
  declarations: [BitumenPage]
})
export class BitumenPageModule {}
