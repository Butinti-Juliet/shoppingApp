import { Component } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item = {

    name: '',
    price: 0,
    type: '',
    key: 0,

    
    };


  groceryList;
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

  // update()
  // {
  //   this.grocery.update(this.item);
  // }

  add(item){

    this.router.navigate ( ['/edit'], {queryParams:{name: item.name, price: item.price, type: item.type, key: item.key}})
 

  }
  delete(){
    this.router.navigate ( ['/delete']);
  }
add2(){
  this.router.navigate ( ['/add']);
}
}

