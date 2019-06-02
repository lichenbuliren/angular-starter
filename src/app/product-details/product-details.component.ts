import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: object;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // ParamsAsMap
      // console.log(params);
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product: object) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
