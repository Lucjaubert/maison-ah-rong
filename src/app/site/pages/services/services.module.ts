import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { HomeRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
