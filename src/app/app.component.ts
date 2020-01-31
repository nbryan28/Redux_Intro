import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Product } from 'src/app/models/product.model';
import { cartState } from 'src/app/redux/selectors/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<any>) {}

  cart: Observable<any>;

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.cart = this.store.pipe(select(cartState));
  }
}
