import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

    /*Customer Add To Cart*/
    addItemToCart(c: Cart):Observable<Cart>{
      return this.http.post<Cart>(`http://localhost:8090/api/v1/cart/addCart`,c)
    }
  
    getCart(username: any):Observable<Array<Cart>>{
        return this.http.get<Array<Cart>>(`http://localhost:8090//api/v1/cart/viewByuser/${username}`);
    }

    removeFromCartByUsername(customerEmail: string | null, cartid: number) {
      const url = `http://localhost:8090/api/v1/cart/del/${cartid}/${customerEmail}`;
      return this.http.delete<void>(url);
    }


   
}
