import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendmailService } from '../../services/sendmail.service';
import { MatSnackBar } from '@angular/material/snack-bar';

// Importer les modules pour la manipulation du DOM
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

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
    phone: 'Le numéro de téléphone est obligatoire et doit être au format valide.',
    booking_date: "La date et l'heure du rendez-vous sont obligatoires.",
  };

  @ViewChild('bookingDateInput', { static: true })
  bookingDateInput!: ElementRef;

  constructor(private formBuilder: FormBuilder, private sendmailService: SendmailService, private _snackBar: MatSnackBar) {
    this.bookingForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?(?:[0-9] ?){6,14}[0-9]$')]],
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

    this.sendmailService.sendEmail(formData).subscribe(
      (response) => {
        console.log('Email envoyé avec succès :', response);
        this.handleSuccessResponse();
      },
      (error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        this.handleErrorResponse(error.message);
      }
    );
  }

  // Méthode pour ouvrir le snackbar en cas de succès
  openSnackBar() {
    this._snackBar.open('Votre demande de réservation a été soumise avec succès', '', {
      duration: 3000,
    });
  }

  handleSuccessResponse() {
    console.log('Demande de réservation soumise avec succès');
    this.bookingForm.reset();
    this.openSnackBar();
  }

  handleErrorResponse(errorMessage: string) {
    console.error('Erreur lors de la soumission de la réservation :', errorMessage);
  }

  onDateChange() {
    const bookingDateControl = this.bookingForm.get('booking_date');
    if (bookingDateControl) {
      const dateValue: string = bookingDateControl.value;
      if (dateValue) {
        const selectedDate = new Date(dateValue);
        const minutes = selectedDate.getMinutes();
        let newMinutes;
        if (minutes < 30) {
          newMinutes = '00';
        } else {
          newMinutes = '30';
        }
        selectedDate.setMinutes(parseInt(newMinutes));
        
        // Formatage manuel de la date dans le format ISO 8601
        const year = selectedDate.getFullYear();
        const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
        const day = ('0' + selectedDate.getDate()).slice(-2);
        const hours = ('0' + selectedDate.getHours()).slice(-2);
        const isoString = `${year}-${month}-${day}T${hours}:${newMinutes}`;

        bookingDateControl.setValue(isoString);
      }
    }
  }
}