import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductosInterface } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ArmarKitService {

  productsSended:any[] = [];
  constructor(private afs: AngularFirestore) {
    this.products = afs.collection<ProductosInterface>('productos').valueChanges();
  }
  private products: Observable<ProductosInterface[]>;

  getAllProducts() {
    return this.products;
  }
  getUncheckedProducts(products: String[]){
    return this.afs.collection('productos', ref => ref.where("Nombre", "not-in", products)).valueChanges();
  } 
  getAllKits() {
    return this.afs.collection('kits').valueChanges();
  }
  getKitByName(name: String) {
    return this.afs.collection('kits', ref => ref.where("Nombre", "==", name)).valueChanges();
  }

  sendProducts(products:any[]){
    this.productsSended = products[0].Productos;
  }
  getProducts(){
    let productSendedCopy = this.productsSended;
    this.productsSended = [];
    return productSendedCopy;
  }

  getAllMiscellaneusProducts(){
    return this.afs.collection('productos', ref => ref.where("Tipo", "==", "Miscelaneos")).valueChanges();
  }
}
