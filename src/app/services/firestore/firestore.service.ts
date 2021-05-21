import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  //Obtener todos los productos
  public getProducts() {
    return this.firestore.collection('producto').snapshotChanges();
  }

  //Obtener algunos productos
  public getProduct(documentId: string) {
    return this.firestore.collection('producto').doc(documentId).snapshotChanges();
  }
}
