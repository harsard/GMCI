import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) { }

  post(url: string, object: any): Observable<any> {
    return this.http.post(url, object).catch(this.handleError);
  }

  get(url: string): Observable<any> {
    return this.http.get(url).catch(this.handleError);
  }

  handleError(error: HttpErrorResponse) {
    return Observable.throwError(error.message || "Server Error");
  }
}
