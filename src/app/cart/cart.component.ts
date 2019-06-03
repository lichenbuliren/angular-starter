import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {
  items = []
  checkoutForm: FormGroup
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems()
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
  }

  ngOnInit() {}

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart()
    this.checkoutForm.reset()
  }
}
