import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/navigation/';

  constructor(private http: HttpClient) {}

  getNavigation(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}