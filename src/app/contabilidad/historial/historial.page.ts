import { Component, OnInit } from '@angular/core';
import { HistorialInterface } from 'src/app/modelos/historial';
import { ContabilidadService } from 'src/app/servicios/contabilidad.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  historial: HistorialInterface[];
  balance: number = 0;
  constructor(private historialServicio: ContabilidadService) { }

  ngOnInit() {
    //this.historialServicio.create();
    this.historialServicio.getHistory().subscribe(products => {
      this.historial = products;
      for (let i = 0; i < this.historial.length; i++) {
        this.balance += this.historial[i].ganancia;
        console.log("balance: ", this.balance);
      }
      this.historial = products.filter(element => element['producto'] != 'plata base');
    });
  }

}
