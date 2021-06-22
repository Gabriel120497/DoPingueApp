import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HistorialInterface } from 'src/app/modelos/historial';
import { ContabilidadService } from 'src/app/servicios/contabilidad.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.page.html',
  styleUrls: ['./nueva-venta.page.scss'],
})
export class NuevaVentaPage implements OnInit {

  ganancia: number = 0;
  costo: number;
  tipo: any [] = [{value:'Venta'}, {value: 'Gasto'}]
  venta = new FormGroup({
    fecha: new FormControl(''),
    producto: new FormControl(''),
    tipo: new FormControl(''),
    cantidad: new FormControl(''),
    precioUnitario: new FormControl(''),
    ingreso: new FormControl(''),
    cliente: new FormControl(''),
  })
  constructor(private ventaServicio: ContabilidadService) { }

  ngOnInit() {
  }

  crear() {
    let venta: HistorialInterface = {
      fecha: this.venta.value.fecha.split('T')[0],
      producto: this.venta.value.producto,
      tipo: this.venta.value.tipo,
      cantidad: this.venta.value.cantidad,
      precioUnitario: this.venta.value.precioUnitario,
      costo: this.costo,
      ingreso: this.venta.value.ingreso,
      ganancia: this.ganancia,
      cliente: this.venta.value.cliente
    };
    console.log(venta);
    this.ventaServicio.create(venta);
  }
  calcularGanancia() {
    this.ganancia = this.venta.value.ingreso - this.costo;
  }
  calcularCosto(){
    this.costo = this.venta.value.cantidad * this.venta.value.precioUnitario;
  }

}
