import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jeta1PageRoutingModule } from './jeta1-routing.module';

import { Jeta1Page } from './jeta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jeta1PageRoutingModule
  ],
  declarations: [Jeta1Page]
})
export class Jeta1PageModule {}
