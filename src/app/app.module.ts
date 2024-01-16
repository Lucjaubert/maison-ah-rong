import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
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
import { BookingService } from './site/shared/services/booking.service';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './main-page/main-page.module';
@NgModule({
    declarations: [	
        AppComponent,
   ],
    providers: [BookingService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MainPageModule,
        FooterModule,
      ],
})
export class AppModule { }

