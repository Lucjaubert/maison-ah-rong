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

  secondPresentation: any | undefined;
  secondPresentationImageUrl: string | undefined;

  thirdPresentation: any | undefined;
  thirdPresentationImageUrl: string | undefined;

  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    // Première Présentation
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;
      this.firstPresentationImageUrl = this.extractImageUrlFromContent(data);
      console.log('First Presentation:', this.firstPresentation);
    });

    // Deuxième Présentation
    this.presentationService.getPresentationById(11).subscribe((data) => {
      this.secondPresentation = data;
      this.secondPresentationImageUrl = this.extractImageUrlFromContent(data);
      console.log('Second Presentation:', this.secondPresentation);
    });

    // Troisième Présentation
    this.presentationService.getPresentationById(12).subscribe((data) => {
      this.thirdPresentation = data;
      this.thirdPresentationImageUrl = this.extractImageUrlFromContent(data);
      console.log('Third Presentation:', this.thirdPresentation);
    });
  }

  private extractImageUrlFromContent(presentation: any): string | undefined {
    if (presentation && presentation.content && presentation.content.rendered) {
      const regex = /src="([^"]+)"/;
      const match = presentation.content.rendered.match(regex);
      return match && match.length > 1 ? match[1] : undefined;
    }
    return undefined;
  }
}
