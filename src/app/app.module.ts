import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PresentationModule } from './site/shared/components/presentation/presentation.module';
import { PrestationsModule } from './site/shared/components/prestations/prestations.module';
import { SoinsModule } from './site/shared/components/soins/soins.module';
import { FooterModule } from './site/shared/components/footer/footer.module';
import { HomeModule } from './site/shared/components/home/home.module';
import { ContactModule } from "./site/shared/components/contact/contact.module";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        NgxPageScrollModule,
        PresentationModule,
        PrestationsModule,
        SoinsModule,
        FooterModule,
        HomeModule,
        ContactModule,
        NgxPageScrollCoreModule.forRoot(),
    ]
})
export class AppModule { }
