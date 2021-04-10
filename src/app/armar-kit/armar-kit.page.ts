import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  nombreProductos: any[] = [];
  nombreProductosCopia: any[] = [];
  constructor(private servicioProductos: ArmarKitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servicioProductos.getAllProducts().subscribe(products => {
      products.forEach(element => {
        element.Checked = false;
      });
      this.miscelaneos = products.filter(tipo => tipo.Tipo == 'Miscelaneos');
      this.bebidas = products.filter(tipo => tipo.Tipo == 'Bebidas');
      this.salado = products.filter(tipo => tipo.Tipo == 'Salado');
      this.dulce = products.filter(tipo => tipo.Tipo == 'Dulce');
      this.saludBelleza = products.filter(tipo => tipo.Tipo == 'Salud y Belleza');
      this.nombreProductos = this.servicioProductos.getProducts();
      for (let index = 0; index < this.nombreProductos.length; index++) {
        for (let indexj = 0; indexj < products.length; indexj++) {
          if (this.nombreProductos[index].Nombre == products[indexj].Nombre) {
            products[indexj].Checked = true;
          }
        }
      }
      console.log(products);

    });
  }
  sumarPrecio(valor, evento) {
    if (evento) {
      this.total += valor;
      console.log("sumar", valor);
      console.log(evento);
    } else {
      this.total = this.total - valor;
      console.log("restar ", valor);
      console.log(evento);
    }
  }
}
