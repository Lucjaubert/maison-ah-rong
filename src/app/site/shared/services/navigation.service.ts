import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private apiUrl = `${environment.apiUrl}navigation/`;

  constructor(private http: HttpClient) {}

  getNavigation(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}