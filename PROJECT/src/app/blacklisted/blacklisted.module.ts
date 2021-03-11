import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlacklistedPageRoutingModule } from './blacklisted-routing.module';

import { BlacklistedPage } from './blacklisted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlacklistedPageRoutingModule
  ],
  declarations: [BlacklistedPage]
})
export class BlacklistedPageModule {}
