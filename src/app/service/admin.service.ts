import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private httpClient:HttpClient) { }

  public loginAdminFromRest(admin:Admin):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/admin/login",admin);
  }

  public registerAdminRest(admin: Admin):Observable<any> {
    return this.httpClient.post<any>("http://localhost:8082/admin/register",admin); 
  }
}
