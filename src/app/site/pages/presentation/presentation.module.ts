import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationService } from '../../shared/services/presentation.service';

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule],
  providers: [PresentationService], 
})
export class PresentationModule {}