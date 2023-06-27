import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { KitchenstaffService } from 'src/app/service/kitchenstaff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orders: Cart[]|any;

  constructor(private kitchenStaffService: KitchenstaffService) { }

  ngOnInit(): void {
    this.fetchOrders();
    console.log("aadil")
  }

  fetchOrders(): void {console.log("aadil")
    this.kitchenStaffService.getOrders().subscribe(
            orders => this.orders = orders,
            error=> console.error("aadil",error)
    );console.log(this.orders)
  }

  changeStatus(order: Cart): void {
    this.kitchenStaffService.updateOrderStatus(order.cartid).subscribe(
      (      updatedOrder: { status: string; }) => {
        order.status = updatedOrder.status;
      },
      (      error: any) => console.error(error)
    );
  }
}
