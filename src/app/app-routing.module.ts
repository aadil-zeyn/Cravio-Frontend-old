
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './admin/add-menu/add-menu.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateMenuComponent } from './admin/update-menu/update-menu.component';
import { ViewMenusComponent } from './admin/view-menus/view-menus.component';
import { ViewRestaurantsComponent } from './admin/view-restaurants/view-restaurants.component';
import { AboutComponent } from './about/about.component';
import { AddRestaurantComponent } from './admin/add-restaurant/add-restaurant.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ListMenuComponent } from './customer/list-menu/list-menu.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/register',component:AdminRegisterComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:'about',component:AboutComponent},
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'view-restaurants', component: ViewRestaurantsComponent },
  { path: 'update-menu/:prodName', component: UpdateMenuComponent },
  { path: 'view-menus/:restaurantName', component: ViewMenusComponent },
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/home',component:CustomerHomeComponent},
  {path:'customer/register',component:CustomerRegisterComponent},
  {path:'customer/profile',component:CustomerProfileComponent},
  {path:'customer/list-menus/:restaurantName',component:ListMenuComponent},
  {path:'customer/cart',component:CustomerCartComponent},
  {path:'customer/checkout',component:CheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
