import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/contact/';

  constructor(private http: HttpClient) {}

  getContact(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}