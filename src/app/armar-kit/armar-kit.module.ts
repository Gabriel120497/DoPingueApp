import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarKitPageRoutingModule } from './armar-kit-routing.module';

import { ArmarKitPage } from './armar-kit.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarKitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArmarKitPage]
})
export class ArmarKitPageModule {}
