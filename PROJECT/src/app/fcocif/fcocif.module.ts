import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcocifPageRoutingModule } from './fcocif-routing.module';

import { FcocifPage } from './fcocif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcocifPageRoutingModule
  ],
  declarations: [FcocifPage]
})
export class FcocifPageModule {}
