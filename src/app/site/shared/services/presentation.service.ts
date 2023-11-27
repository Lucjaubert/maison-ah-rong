import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  private apiUrl = 'https://maisonahrong.com/wp-json/maison-ah-rong/v2/presentation/';

  constructor(private http: HttpClient) {}

  getPresentation(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
