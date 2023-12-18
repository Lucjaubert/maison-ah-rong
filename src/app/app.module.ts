import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PresentationModule } from './site/shared/components/presentation/presentation.module';
import { PrestationsModule } from './site/shared/components/prestations/prestations.module';
import { SoinsModule } from './site/shared/components/soins/soins.module';
import { FooterModule } from './site/shared/components/footer/footer.module';
import { HomeModule } from './site/shared/components/home/home.module';
import { ContactModule } from "./site/shared/components/contact/contact.module";
import { BookingModule } from './site/shared/components/booking/booking.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([]), 
        PrestationsModule,
        PresentationModule,
        SoinsModule,
        FooterModule,
        HomeModule,
        BookingModule,
        ContactModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class AppModule { }

