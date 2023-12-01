// prestations.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PrestationsService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/prestation/';

  constructor(private http: HttpClient) {}

  getPrestations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching prestations data:', error);
        return of([]);
      })
    );
  }

  getPrestationById(id: number): Observable<any> {
    return this.getPrestations().pipe(
      map(prestations => prestations.find(prestation => prestation.id === id)),
      catchError(error => {
        console.error('Error fetching prestations data:', error);
        return of(undefined);
      })
    );
  }
}
