import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaVentaPageRoutingModule } from './nueva-venta-routing.module';

import { NuevaVentaPage } from './nueva-venta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaVentaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevaVentaPage]
})
export class NuevaVentaPageModule {}
