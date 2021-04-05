import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitsInterface } from '../modelos/kits';
import { ProductosInterface } from '../modelos/productos';
import { ArmarKitService } from '../servicios/armar-kit.service';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.page.html',
  styleUrls: ['./kits.page.scss'],
})
export class KitsPage implements OnInit {

  kits: KitsInterface[];
  cumpleaños: ProductosInterface[];
  grados: ProductosInterface[];
  spa: ProductosInterface[];
  diaDeLaMadre: ProductosInterface[];
  diaDelPadre: ProductosInterface[];
  diaDeLaMujer: ProductosInterface[];

  constructor(private activatedRoute: ActivatedRoute, private servicioProductos: ArmarKitService) { }

  ngOnInit() {
    this.servicioProductos.getAllKits().subscribe(products => {
      this.kits = products;
      console.log("kits: ", this.kits);
    });
  }

  getKit(nombre: String){
    console.log(nombre);
    this.servicioProductos.getKiyByName(nombre).subscribe(kit => {
      console.log(kit);
      
    })
  }

}
