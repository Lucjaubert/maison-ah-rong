import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PresentationModule } from "../presentation/presentation.module";
import { SoinsModule } from "../soins/soins.module";
import { PrestationsModule } from "../prestations/prestations.module";
import { BookingModule } from "../booking/booking.module";
import { ContactModule } from "../contact/contact.module";

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        PresentationModule,
        SoinsModule,
        PrestationsModule,
        BookingModule,
        ContactModule
    ]
})
export class HomeModule { }
