import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { KitsInterface } from '../modelos/kits';
import { ArmarKitService } from '../servicios/armar-kit.service';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.page.html',
  styleUrls: ['./kits.page.scss'],
})
export class KitsPage implements OnInit {

  allKits: KitsInterface[];
  checkedProducts: any[] = [];
  constructor(private servicioProductos: ArmarKitService, private modalCtrl: ModalController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servicioProductos.getAllKits().subscribe(products => {
      this.allKits = products;
      console.log("kits: ", this.allKits);
    });
  }

  async getKit(nombre: String) {
    console.log(nombre);
    this.servicioProductos.getKitByName(nombre).subscribe(kit => {
      this.servicioProductos.sendProducts(kit);
    });
  }

}
