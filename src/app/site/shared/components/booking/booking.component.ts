import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  animations: [
    trigger('errorState', [
      state('void', style({
        height: 0,
        opacity: 0
      })),
      state('*', style({
        height: 'auto',
        opacity: 1
      })),
      transition('void <=> *', animate('0.5s ease-in-out'))
    ])
  ]
})

export class BookingComponent implements OnInit {

  bookings: any[] = [];
  bookingForm: FormGroup = this.formBuilder.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    appointment_date: ['', [Validators.required]],
    massage_type: ['', [Validators.required]],
    session_count: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  getBookings() {
    return this.bookings;
  }

  submitBookingForm() {
    if (!this.bookingForm.valid) {
      return;
    }
  
    const formData = this.bookingForm.value;
  
    this.http.post('/wp/v2/booking', formData)
      .subscribe(
        response => {
          console.log('Formulaire de réservation soumis avec succès :', response);
          this.bookingForm.reset();
        },
        error => {
          console.error('Erreur lors de la soumission du formulaire de réservation :', error);
        }
      );
  }
}
