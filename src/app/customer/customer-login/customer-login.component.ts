import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { UserService } from 'src/app/service/user.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {



  loginForm: FormGroup | undefined;
   



  customer = new Customer();
  errorMessage:string='';
  constructor(private customerService:CustomerService,
     private router:Router,private fb: FormBuilder,
     private userService:UserService,
     private userAuthService:UserAuthService) { 
    this.myForm();
  }

  myForm() {
      this.loginForm = this.fb.group({
      customer_email : ['', [Validators.required, 
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
      });
   }

  ngOnInit(): void {
    console.log(localStorage.getItem("roles"))
  }
  // loginCustomer() {
  //   this.customerService.loginCustomerFromRest(this.customer).subscribe(
  //     (      data: any)=>{
  //       console.log("User Logged in successfully");
  //       this.routerObj.navigate(['customer/home']);
  //       this.customer = data;
  //     },
  //     (      error: any)=>{
  //       this.errorMessage = 'Bad Credentials. Please enter the correct one!!!'
  //       console.log(error);
  //     }
  //   )
    
  //     localStorage.setItem('customerEmail',this.customer.customer_email);
  //     // localStorage.setItem('customerName',this.customer.customer_name);
  //     // localStorage.setItem('customerAddress',this.customer.customer_address);
  //     console.log(localStorage.getItem('customerEmail'));
  //     return this.customer;
  // }
  loginCustomer() {
    // this.userService.login(this.customer).subscribe(
    //   (      data: any)=>{
    //     console.log("User Logged in successfully");
    //     this.routerObj.navigate(['customer/home']);
    //     this.customer = data;
    //   },
    //   (      error: any)=>{
    //     this.errorMessage = 'Bad Credentials. Please enter the correct one!!!'
    //     console.log(error);
    //   }
    // )
    this.userService.login(this.customer).subscribe(
    (response: any) => {
      // Handle successful login response
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;
      // if (role === 'Admin') {
        this.router.navigate(['customer/home']);
      // } else {
      //   this.router.navigate(['/courses']);
      // }
    },
    (error: any) => {
      // Handle login error
      if (error.status === 400 && error.error && error.error.errors) {
        // Validation errors occurred
        const validationErrors = error.error.errors;
        console.log(validationErrors); // You can handle the validation errors as needed
      } else {
        // Other error occurred
        console.log(error);
      }
    }
  );
    
      localStorage.setItem('customerEmail',this.customer.userName);
      localStorage.setItem('customerName',this.customer.userFirstName);
      localStorage.setItem('customerAddress',this.customer.userAddress);
      console.log(localStorage.getItem('customerEmail'));
      return this.customer;
  }

}
