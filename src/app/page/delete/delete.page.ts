import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-delete',
  templateUrl: 'delete.page.html',
  styleUrls: ['delete.page.scss'],
})
export class DeletePage {
  
  itemList;
 

  constructor(private grocery: GroceryService, private router: Router ) {

    // this.groceryList = this.grocery.getItems();
    
  this.grocery.getItems2().subscribe(data => {

    this.itemList = data.map( e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      }as Item;
      
  });
  console.log(this.itemList);


  
 });

  }

 
  delete(item, key){
  this.grocery.delete(item, key)

  }

  
}

