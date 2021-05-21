import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  promociones: Observable <any[]>;
  constructor(db: AngularFirestore) {
    this.promociones=db.collection('promociones').valueChanges();
  }

}
