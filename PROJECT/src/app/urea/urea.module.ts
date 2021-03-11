import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UreaPageRoutingModule } from './urea-routing.module';

import { UreaPage } from './urea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UreaPageRoutingModule
  ],
  declarations: [UreaPage]
})
export class UreaPageModule {}
