import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { HomeModule } from '../site/shared/components/home/home.module';
import { PresentationModule } from '../site/shared/components/presentation/presentation.module';
import { PrestationsModule } from '../site/shared/components/prestations/prestations.module';
import { SoinsModule } from '../site/shared/components/soins/soins.module';
import { ContactModule } from '../site/shared/components/contact/contact.module';
import { FooterModule } from '../site/shared/components/footer/footer.module';
import { BookingModule } from '../site/shared/components/booking/booking.module';

@NgModule({
  declarations: [
    MainPageComponent
],
  imports: [
    CommonModule,
    HomeModule,
    PresentationModule,
    PrestationsModule,
    SoinsModule,
    ContactModule,
    FooterModule,
    BookingModule
  ],
  exports: [MainPageComponent], 
})
export class MainPageModule {}