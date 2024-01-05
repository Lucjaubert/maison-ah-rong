import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'https://maisonahrong.com/wp-json/wp/v2/booking';

  constructor(private http: HttpClient) {}

  submitBookingForm(bookingData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, bookingData, { headers });
  }
}
