import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {
  items = []
  constructor(private cartService: CartService) {
    this.items = cartService.getItems()
  }

  ngOnInit() {}
}
