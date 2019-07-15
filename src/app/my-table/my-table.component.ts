import { Component, OnInit, Input } from '@angular/core';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {

  @Input()
  rows: number = 0;
 
  Products = [
    { id: 1, name : 'product 1', price : 100 },
    { id: 2, name : 'product 2', price : 200 },
    { id: 3, name : 'product 3', price : 300 },
    { id: 4, name : 'product 4', price : 400 },
    { id: 5, name : 'product 5', price : 500 },
    { id: 6, name : 'product 6', price : 600 },
    { id: 7, name : 'product 7', price : 700 },
    { id: 8, name : 'product 8', price : 800 },
    { id: 9, name : 'product 9', price : 900 },
    { id: 10, name : 'product 10', price : 1000 }
            ];

  constructor() { }

  ngOnInit() {
  }

  delete($event, item){
    console.log(item, this.Products);

    this.Products = this.Products.filter(i => i !== item);
  }

}

export class Data {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number)
  {
    this.id = id;
    this.name = name;
    this.price = price;

  }
}
