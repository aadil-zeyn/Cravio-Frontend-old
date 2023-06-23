import { Component } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent {

    cartItems: Cart[] = [];
    customerEmail = localStorage.getItem('customerEmail');

  constructor(private cartService: CartService,private location: Location,private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCart(this.customerEmail).subscribe(
      (response) => {
        this.cartItems = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeFromCart(cartItem: Cart): void {
    this.cartService.removeFromCartByUsername(this.customerEmail, cartItem.cartid).subscribe(
    () => {
        
        this.cartItems = this.cartItems.filter(item => item.prodid !== cartItem.prodid);
        alert("Item successfully removed from cart");
      },
      (error: any) => {
        console.log(error);
      }
    );
      
  }
  

  updateQuantity(cartItem: Cart, action: string): void {
    // Implement the logic to update the quantity of the cart item
    // Call the appropriate service method and handle the response
  }

  calculateTotalCost(): number {
    let totalCost = 0;
    for (const cartItem of this.cartItems) {
      totalCost += cartItem.price * cartItem.quantity;
    }
    return totalCost;
  }

  goBack(): void {
    this.location.back();
  }

  proceedToPayment(): void {
    // Implement any necessary logic before navigating to the checkout page
    this.router.navigate(['/customer/checkout']);
  }

}
