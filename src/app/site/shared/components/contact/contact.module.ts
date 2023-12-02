import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HomeRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
