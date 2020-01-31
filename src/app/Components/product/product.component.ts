import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/redux/market';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Cart from 'src/app/redux/actions';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      const id = p.id;
      // const result = Array.prototype.filter.call(PRODUCTS, v => v.id === id);
      // if (result.length > 0) {
      //   this.product = result[0];
      // }
      if (id <= PRODUCTS.length && id >= 0) {
      this.product = PRODUCTS[id];
    }
    });
  }

  addToCart(product) {
    this.store.dispatch(new Cart.AddProduct(product));
  }


  removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product));
  }
}
