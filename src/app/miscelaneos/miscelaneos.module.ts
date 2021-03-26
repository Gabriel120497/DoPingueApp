import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscelaneosPageRoutingModule } from './miscelaneos-routing.module';

import { MiscelaneosPage } from './miscelaneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscelaneosPageRoutingModule
  ],
  declarations: [MiscelaneosPage]
})
export class MiscelaneosPageModule {}
