import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/redux/market';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: []
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  constructor() {}

  ngOnInit() {}
}
