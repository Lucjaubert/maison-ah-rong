import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../shared/services/presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  firstPresentation: any | undefined;
  firstPresentationImageUrl: string | undefined;

  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;

      // Vérifiez si content existe et contient l'URL de l'image
      if (this.firstPresentation.content && this.firstPresentation.content.rendered) {
        // Utilisez une expression régulière pour extraire l'URL de l'image du texte HTML
        const regex = /src="([^"]+)"/;
        const match = this.firstPresentation.content.rendered.match(regex);

        // Vérifiez si une correspondance a été trouvée
        if (match && match.length > 1) {
          // Affectez l'URL de l'image à la propriété firstPresentationImageUrl
          this.firstPresentationImageUrl = match[1];
        }
      }

      console.log('First Presentation:', this.firstPresentation);
    });
  }
}