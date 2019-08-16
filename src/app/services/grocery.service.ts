import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  add(item: any, key: any) {
    throw new Error("Method not implemented.");
  }
  // delete(item: any, key: any) {
  //   throw new Error("Method not implemented.");
  // }

  private itemDoc: AngularFirestoreDocument<Item>;

   list;
   write;

  constructor(private db: AngularFirestore, private afs: AngularFirestore ) { }

  getItems(){
   
    // return this.db.collection('grocery').valueChanges();
  }

  getItems2(){
    
   return this.db.collection('grocery').snapshotChanges();
  }

  post(item, alert)
  {
    this.write = this.db.collection<any>('grocery');
    this.write.add(item).then(() => {
     console.log("successful")
    });
  }
  
  update(item, key) {
    this.itemDoc = this.db.doc<Item>('grocery/'+ key);
    this.itemDoc.update(item);
  }

  delete(item, key) {
    this.itemDoc = this.db.doc<Item>('grocery/'+ key);
    this.itemDoc.delete();
  }

}
