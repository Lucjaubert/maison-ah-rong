import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit, AfterViewInit, OnDestroy {
  firstPresentationExtraImageUrl = 'assets/img/fond-qui-suis-je.png';
  firstPresentation: any | undefined;
  secondPresentation: any | undefined;
  thirdPresentation: any | undefined;

  private observer!: IntersectionObserver;
  private hiddenSections!: NodeListOf<Element>; // Spécifiez le type explicitement

  constructor(
    public presentationService: PresentationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadPresentations();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
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

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'function') {
      this.hiddenSections = document.querySelectorAll('.presentation-section');

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target); // Stop observing after intersection
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger animation when 50% of the section is visible
      });

      this.hiddenSections.forEach((section) => this.observer.observe(section));
    } else {
      console.error('IntersectionObserver is not supported in this browser.');
    }
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
