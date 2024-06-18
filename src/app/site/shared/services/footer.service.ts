import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private apiUrl = `${environment.apiUrl}footer/`;
  

  constructor(private http: HttpClient) {}

  getFooter(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
