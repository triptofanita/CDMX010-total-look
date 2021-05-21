import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoria: Observable<any[]>;
  constructor(db: AngularFirestore) {
  this.categoria = db.collection('categoria').valueChanges();
  }
}
