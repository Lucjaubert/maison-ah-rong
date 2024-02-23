import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendmailService } from '../../services/sendmail.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm: FormGroup;
  errorMessages = {
    first_name: 'Le nom est obligatoire.',
    last_name: 'Le prénom est obligatoire.',
    email: "L'adresse e-mail est obligatoire et doit être au format valide.",
    booking_date: "La date et l'heure du rendez-vous sont obligatoires.",
  };

  constructor(private formBuilder: FormBuilder, private sendmailService: SendmailService) {
    this.bookingForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      booking_date: ['', [Validators.required]],
      massage_type: ['', [Validators.required]],
      session_count: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  sendEmail() {
    if (!this.bookingForm.valid) {
      console.log('Formulaire invalide. Ne soumettez pas la requête.');
      return;
    }

    const formData = this.bookingForm.value;

    const API_URL = 'https://maisonahrong.com/wp-json/maison-ah-rong/v1/send-mail/';

    this.sendmailService.sendEmail(formData).subscribe(
      (response) => {
        console.log('Email envoyé avec succès :', response);
        this.handleSuccessResponse();
      },
      (error) => {
        console.error('Erreur lors de lenvoi de l\'email :', error);
        this.handleErrorResponse(error.message);
      }
    );
  }

  handleSuccessResponse() {
    console.log('Réservation soumise avec succès');
    this.bookingForm.reset();
  }

  handleErrorResponse(errorMessage: string) {
    console.error('Erreur lors de la soumission de la réservation :', errorMessage);
  }
}
