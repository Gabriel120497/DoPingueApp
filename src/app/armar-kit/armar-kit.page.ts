import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../modelos/productos';
import { ArmarKitService } from '../servicios/armar-kit.service';

@Component({
  selector: 'app-armar-kit',
  templateUrl: './armar-kit.page.html',
  styleUrls: ['./armar-kit.page.scss'],
})
export class ArmarKitPage implements OnInit {

  productos: ProductosInterface[];
  miscelaneos: ProductosInterface[];
  bebidas: ProductosInterface[];
  salado: ProductosInterface[];
  dulce: ProductosInterface[];
  saludBelleza: ProductosInterface[];
  total: number = 0;
  isChecked: boolean = false;
  constructor(private servicioProductos: ArmarKitService) { }

  ngOnInit() {
    this.servicioProductos.getAllProducts().subscribe(products => {
      console.log(products);
      
      this.miscelaneos = products.filter(tipo => tipo.Tipo == 'Miscelaneos');
      this.bebidas = products.filter(tipo => tipo.Tipo == 'Bebidas');
      this.salado = products.filter(tipo => tipo.Tipo == 'Salado');
      this.dulce = products.filter(tipo => tipo.Tipo == 'Dulce');
      this.saludBelleza = products.filter(tipo => tipo.Tipo == 'Salud y Belleza');
    });
  }
  sumarPrecio(valor, evento){
    if (evento) {
      this.total += valor;
      console.log("sumar", valor);
      console.log(evento);
    } else {
      this.total = this.total-valor;
      console.log("restar ", valor);
      console.log(evento);
    }
  }
}
