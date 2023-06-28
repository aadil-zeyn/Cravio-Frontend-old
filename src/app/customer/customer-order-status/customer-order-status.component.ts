import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-customer-order-status',
  templateUrl: './customer-order-status.component.html',
  styleUrls: ['./customer-order-status.component.css']
})
export class CustomerOrderStatusComponent  implements OnInit  {
  orders: Cart[]|any;

  constructor(private kitchenStaffService: KitchenstaffService) { }
userName=localStorage.getItem('customerEmail');
  ngOnInit(): void {
    this.fetchOrders();
    console.log("aadil")
  }

  fetchOrders(): void {console.log("aadil")
    this.kitchenStaffService.getOrdersByUser(this.userName).subscribe(
            orders => this.orders = orders,
            error=> console.error("aadil",error)
    );console.log(this.orders)
  }
}
