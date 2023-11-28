import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationService } from '../../shared/services/presentation.service';
import { PresentationRoutingModule } from './presentation-routing.module';
import { SanitizeHtmlPipe } from '../../shared/pipes/sanitize-html.pipe';

@NgModule({
  declarations: [
    PresentationComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule 
  ],
  providers: [
    PresentationService
  ], 
})
export class PresentationModule {}