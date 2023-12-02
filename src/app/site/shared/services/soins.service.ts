import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SoinsService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/soins/';

  constructor(private http: HttpClient) {}

  getSoins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching soins data:', error);
        return of([]);
      })
    );
  }

  getSoinsById(id: number): Observable<any> {
    return this.getSoins().pipe(
      map(soins => soins.find(soin => soin.id === id)),
      map(soin => this.extractFeaturedMediaUrl(soin)),
      catchError(error => {
        console.error('Error fetching soins data:', error);
        return of(undefined);
      })
    );
  }

  private extractFeaturedMediaUrl(soin: any): any {
    if (soin && soin.featured_media) {
      return {
        ...soin,
        featured_media_url: soin.featured_media.url,
      };
    } else {
      return soin;
    }
  }
}
