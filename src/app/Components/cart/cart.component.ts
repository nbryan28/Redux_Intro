import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as Cart from 'src/app/redux/actions';
import { Product } from 'src/app/models/product.model';
import { cartState } from 'src/app/redux/selectors/cart.selector';
import { itemState } from 'src/app/redux/selectors/cart.selector';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private store: Store<any>) {}
  colleciones = new Array(13);
  itemState: Observable<Product[]>;
  items = [];
  itemsPro: Product[] = [];

  ngOnInit() {
    this.itemState = this.store.pipe(select(itemState));

    this.itemState.subscribe(itemValues => {
      this.items = [];
      from(itemValues).subscribe(val1 => {
        this.items.push({
          val1
        });
      });
      this.itemsPro = itemValues;
    });

    console.log(this.items);
  }

  removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product));
  }
}
