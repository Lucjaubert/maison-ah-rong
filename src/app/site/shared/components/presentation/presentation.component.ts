import { Component, ElementRef, OnInit } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

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

  firstPresentationExtraImageUrl: string = "assets/img/fond-qui-suis-je.png";

  constructor(
    public presentationService: PresentationService,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // Première Présentation
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;
      this.firstPresentationImageUrl = this.extractImageUrlFromContent(data);
    });

    // Deuxième Présentation
    this.presentationService.getPresentationById(11).subscribe((data) => {
      this.secondPresentation = data;
      this.secondPresentationImageUrl = this.extractImageUrlFromContent(data);
    });

    // Troisième Présentation
    this.presentationService.getPresentationById(12).subscribe((data) => {
      this.thirdPresentation = data;
      this.thirdPresentationImageUrl = this.extractImageUrlFromContent(data);
    });
  }

  private extractImageUrlFromContent(presentation: any): string | undefined {
    if (presentation && presentation.featured_media_url) {
      return presentation.featured_media_url;
    }
    return undefined;
  }  

  sanitizeHtml(content: string): SafeHtml {  
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
