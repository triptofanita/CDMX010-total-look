import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  producto: Observable <any[]>;
  constructor(db: AngularFirestore) {
    this.producto=db.collection('producto').valueChanges();
  }



}
