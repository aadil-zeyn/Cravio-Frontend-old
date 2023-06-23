import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { ConnectionService } from 'src/app/service/connection.service';
import { Location } from '@angular/common';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {
  menus: Menu[];
  restname:string;
  cart:Cart;
  customerEmail = localStorage.getItem('customerEmail');
  constructor(private cartServ: CartService,private connectService: ConnectionService, private route: ActivatedRoute,private location: Location, private router: Router) {
  }
    


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.restname = params['restaurantName'];
      console.log(this.restname);
      this.fetchMenus();
    });
  }
  fetchMenus() {

    this.connectService.getMenu(this.restname).subscribe(
      (response) => {
        this.menus = response;
        console.log(this.menus);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }


  addToCart(menu: Menu): void {
    this.cart = new Cart();
    this.cart.username = this.customerEmail; // Set the username to the customer's email
    this.cart.restName = this.restname; // Set the restaurant name
    this.cart.prodid = menu.id; // Set the product ID
    this.cart.prodname = menu.product; // Set the product name
    this.cart.price = menu.price; // Set the product price
    this.cart.status = 'Added'; // Set the status as "Added"
    this.cart.quantity = 1; // Set the quantity as 1 (you can change this as per your requirements)
  
    this.cartServ.addItemToCart(this.cart).subscribe(
      (data) => {
        alert('Added to cart successfully!');
        console.log(data)
      },
      (error) => {
        console.log(error);
        alert('Failed to add to cart. Please try again.');
      }
    );
  }
  
}
