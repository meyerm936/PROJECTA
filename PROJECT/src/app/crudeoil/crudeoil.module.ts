import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudeoilPageRoutingModule } from './crudeoil-routing.module';

import { CrudeoilPage } from './crudeoil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudeoilPageRoutingModule
  ],
  declarations: [CrudeoilPage]
})
export class CrudeoilPageModule {}
