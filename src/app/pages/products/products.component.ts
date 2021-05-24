import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productos: any[] = [];
  constructor(db: AngularFirestore) {
    db.collection('producto').snapshotChanges().subscribe(productos => {
      //this.productos = productos[0].payload.doc.data();
      console.log(productos[0].payload.doc.data());
      this.productos = productos.map(producto => producto.payload.doc.data());
      console.log(this.filtrarPrecio (500))
    });
  }

  filtrarPrecio(precio: number) {
    return this.productos.filter(item => item.price >= precio)
  }
}
