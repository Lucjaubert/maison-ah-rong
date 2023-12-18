import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/booking/';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching booking data:', error);
        return of([]);
      })
    );
  }

  submitBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData).pipe(
      catchError(error => {
        console.error('Error submitting booking:', error);
        return of(undefined);
      })
    );
  }
}