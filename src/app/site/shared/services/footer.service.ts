import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private apiUrl = 'https://maisonahrong.com/wp-json/maison-ah-rong/v2/footer/';

  constructor(private http: HttpClient) {}

  getFooter(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
