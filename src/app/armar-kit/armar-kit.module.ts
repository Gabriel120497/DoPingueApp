import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarKitPageRoutingModule } from './armar-kit-routing.module';

import { ArmarKitPage } from './armar-kit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarKitPageRoutingModule
  ],
  declarations: [ArmarKitPage]
})
export class ArmarKitPageModule {}
