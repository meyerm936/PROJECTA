import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasolinePageRoutingModule } from './gasoline-routing.module';

import { GasolinePage } from './gasoline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasolinePageRoutingModule
  ],
  declarations: [GasolinePage]
})
export class GasolinePageModule {}
