import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationService } from '../../services/presentation.service';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
  declarations: [
    PresentationComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PresentationComponent
  ],
  providers: [
    PresentationService
  ], 
})
export class PresentationModule {}