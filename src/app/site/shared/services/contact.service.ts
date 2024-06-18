import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}contacts/`;

  constructor(private http: HttpClient) {}

  getContact(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching contact data:', error);
        return of([]);
      })
    );
  }

  getContactById(id: number): Observable<any> {
    return this.getContact().pipe(
      map(contacts => contacts.find(contact => contact.id === id)),
      catchError(error => {
        console.error('Error fetching contact data:', error);
        return of(undefined);
      })
    );
  }
}
