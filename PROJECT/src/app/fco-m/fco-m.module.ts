import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcoMPageRoutingModule } from './fco-m-routing.module';

import { FcoMPage } from './fco-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcoMPageRoutingModule
  ],
  declarations: [FcoMPage]
})
export class FcoMPageModule {}
