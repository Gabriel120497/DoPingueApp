import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { HistorialInterface } from "../modelos/historial";

@Injectable({
    providedIn: 'root'
})

export class ContabilidadService {

    data: any[] = [{
        fecha: '2021-06-20',
        producto: 'Kit día del padre',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 41402,
        costo: 41402,
        ingreso: 58000,
        ganancia: 16598,
        cliente: 'Patricia Arbeláez'
    },
    {
        fecha: '2021-06-20',
        producto: 'Kit día del padre',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 40370,
        costo: 40370,
        ingreso: 57000,
        ganancia: 16630,
        cliente: 'Eucaris Arbeláez'
    },
    {
        fecha: '2021-06-20',
        producto: 'Kit día del padre',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 31390,
        costo: 31390,
        ingreso: 45000,
        ganancia: 13610,
        cliente: 'Mariana Uribe'
    }, {
        fecha: '2021-06-20',
        producto: 'Kit día del padre',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 42380,
        costo: 42380,
        ingreso: 58000,
        ganancia: 15620,
        cliente: 'Victoria Moreno'
    }, {
        fecha: '2021-06-20',
        producto: 'Barquillo',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 1150,
        costo: 1150,
        ingreso: 1200,
        ganancia: 50,
        cliente: 'Victoria Moreno'
    }, {
        fecha: '2021-06-20',
        producto: 'Barquillo',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 1150,
        costo: 1150,
        ingreso: 1500,
        ganancia: 350,
        cliente: 'Gabriel'
    }, {
        fecha: '2021-06-20',
        producto: 'Barquillo',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 1150,
        costo: 1150,
        ingreso: 1500,
        ganancia: 350,
        cliente: 'Mariana Uribe'
    }, {
        fecha: '2021-06-20',
        producto: 'Barquillo',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 1150,
        costo: 1150,
        ingreso: 1500,
        ganancia: 350,
        cliente: 'Eucaris Arbeláez'
    }, {
        fecha: '22/06/2021',
        producto: 'Barquillo',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 1150,
        costo: 1150,
        ingreso: 1500,
        ganancia: 350,
        cliente: 'Mariana Uribe'
    }, {
        fecha: '2021-06-04',
        producto: 'Cuadro Carta',
        tipo: 'Venta',
        cantidad: 1,
        precioUnitario: 10000,
        costo: 10000,
        ingreso: 18000,
        ganancia: 8000,
        cliente: 'Sebastian Franco'
    }, {
        fecha: '2021-06-21',
        producto: 'Botones',
        tipo: 'Venta',
        cantidad: 13,
        precioUnitario: 2000,
        costo: 26000,
        ingreso: 39000,
        ganancia: 13000,
        cliente: 'Emmanuel Montes'
    },
    ]

    constructor(private afs: AngularFirestore) { }

    getHistory() {
        return this.afs.collection('contabilidad').valueChanges();
    }

    create(element: HistorialInterface) {
        this.afs.collection('contabilidad').add(element)

    }

}