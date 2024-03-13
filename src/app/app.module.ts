import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { MainPageModule } from './main-page/main-page.module';
import { FooterModule } from './site/shared/components/footer/footer.module';
import { SendmailService } from './site/shared/services/sendmail.service';
import { PresentationModule } from './site/shared/components/presentation/presentation.module';

@NgModule({
  declarations: [AppComponent],
  providers: [SendmailService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]), 
    AppRoutingModule,
    MainPageModule,
    FooterModule,
    PresentationModule,
  ],
})
export class AppModule {}
