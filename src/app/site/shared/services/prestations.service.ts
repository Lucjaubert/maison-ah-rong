import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrestationService {
    
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/prestations/';

  constructor(private http: HttpClient) {}

  getPrestations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
