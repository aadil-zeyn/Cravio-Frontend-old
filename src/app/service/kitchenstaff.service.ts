import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitchenstaffService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8090/api/v1/staff'; // Replace with your actual backend API URL


  getOrders(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/orders`);
  }

  updateOrderStatus(cartId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/orders/${cartId}`,{});
  }
}
