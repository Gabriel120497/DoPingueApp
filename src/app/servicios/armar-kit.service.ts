import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { ProductosInterface } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ArmarKitService {

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<ProductosInterface>('productos');
    this.products = this.productsCollection.valueChanges();
  }
  private productsCollection: AngularFirestoreCollection<ProductosInterface>;
  private products: Observable<ProductosInterface[]>;

  getAllProducts() {
    return this.products;
  }
  getAllKits() {
    return this.afs.collection('kits').valueChanges();
  }
  getKiyByName(name: String) {
    return this.afs.collection('kits', ref => ref.where("Nombre", "==", name)).valueChanges();
  }
}
