import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  firstPresentationExtraImageUrl = 'assets/img/fond-qui-suis-je.png';
  firstPresentation: any | undefined;
  secondPresentation: any | undefined;
  thirdPresentation: any | undefined;

  constructor(
    public presentationService: PresentationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadPresentations();
  }

  private loadPresentations(): void {
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;
    });

    this.presentationService.getPresentationById(11).subscribe((data) => {
      this.secondPresentation = data;
    });

    this.presentationService.getPresentationById(12).subscribe((data) => {
      this.thirdPresentation = data;
    });
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
