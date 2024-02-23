import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './site/shared/components/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './main-page/main-page.module';
import { SendmailService } from './site/shared/services/sendmail.service';
@NgModule({
    declarations: [	
        AppComponent,
   ],
    providers: [SendmailService],
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

