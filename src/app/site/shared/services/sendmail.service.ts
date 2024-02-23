import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http: HttpClient) { }

  sendEmail(formData: any): Observable<any> {
    const API_URL = 'https://maisonahrong.com/wp-json/maison-ah-rong/v1/send-mail/';
    return this.http.post(API_URL, formData);
  }
}
