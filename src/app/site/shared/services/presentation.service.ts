import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/presentation/';

  constructor(private http: HttpClient) {}

  getPresentation(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching presentation data:', error);
        return of([]);
      })
    );
  }

  getPresentationById(id: number): Observable<any> {
    return this.getPresentation().pipe(
      map(presentations => presentations.find(presentation => presentation.id === id)),
      catchError(error => {
        console.error('Error fetching presentation data:', error);
        return of(undefined);
      })
    );
  }
}
