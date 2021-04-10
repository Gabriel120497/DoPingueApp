import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../modelos/productos';
import { ArmarKitService } from '../servicios/armar-kit.service';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.page.html',
  styleUrls: ['./miscelaneos.page.scss'],
})
export class MiscelaneosPage implements OnInit {

  total: number = 0;
  miscelaneos: ProductosInterface[];

  constructor(private servicioProductos: ArmarKitService) { }

  ngOnInit() {
    this.servicioProductos.getAllMiscellaneusProducts().subscribe(products => {
      this.miscelaneos = products;
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
