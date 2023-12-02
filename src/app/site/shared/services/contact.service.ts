import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/contacts/';

  constructor(private http: HttpClient) {}

  getContact(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching contact data:', error);
        return of([]);
      })
    );
  }
}
