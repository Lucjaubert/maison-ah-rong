import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  isBookingSubmitted: boolean = false;
  bookingStatusMessage: string = '';

  errorMessages = {
    first_name: 'Le nom est obligatoire.',
    last_name: 'Le prénom est obligatoire.',
    email: "L'adresse e-mail est obligatoire et doit être au format valide.",
    booking_date: "La date et l'heure du rendez-vous sont obligatoires.",
    massage_type: 'Le type de massage est obligatoire.',
    session_count: 'Le nombre de séances est obligatoire et doit être compris entre 1 et 5.',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
  ) {
    this.bookingForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      booking_date: ['', [Validators.required]],
      massage_type: ['', [Validators.required]],
      session_count: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit() {}

  shouldShowError(controlName: string): boolean {
    const control = this.bookingForm.get(controlName);
    return !!(control?.touched && control?.invalid);
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.bookingForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Ce champ est obligatoire.';
    } else if (control?.hasError('email')) {
      return "L'adresse e-mail doit être au format valide.";
    } else if (control?.hasError('min') || control?.hasError('max')) {
      return 'Le nombre de séances doit être compris entre 1 et 5.';
    }

    return null;
  }

  submitBookingForm() {
    if (!this.bookingForm.valid) {
      console.log('Formulaire invalide. Ne soumettez pas la requête.');
      return;
    }

    const formData = this.bookingForm.value;

    // Utilisez le service de réservation pour envoyer les données
    this.bookingService.submitBookingForm(formData).subscribe(
      (response) => {
        console.log('Données envoyées à WordPress avec succès :', response);
        this.bookingForm.reset();
        this.isBookingSubmitted = true;
        this.bookingStatusMessage = 'La réservation est en cours, vous recevrez un mail de confirmation, merci';
      },
      (error) => {
        console.error("Erreur lors de l'envoi des données à WordPress :", error);
        this.isBookingSubmitted = false;
        this.bookingStatusMessage = 'Une erreur s\'est produite lors de la réservation. Veuillez réessayer.';
      }
    );
  }
}
