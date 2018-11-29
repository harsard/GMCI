import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: '';

  constructor(private http: HttpUtilService) { }

  save(customer: any): Observable<any> {
    return this.http.post(this.baseUrl, customer);
  }

  get(search: any) {
    return this.http.get(this.baseUrl);
  }
}
