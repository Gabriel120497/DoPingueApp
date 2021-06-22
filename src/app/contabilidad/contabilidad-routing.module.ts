import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilidadPage } from './contabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilidadPage,
    children: [
      {
        path: 'historial',
        loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule)
      },
      {
        path: 'nueva-venta',
        loadChildren: () => import('./nueva-venta/nueva-venta.module').then(m => m.NuevaVentaPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilidadPageRoutingModule { }
