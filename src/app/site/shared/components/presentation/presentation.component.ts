import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit, AfterViewInit {

  firstPresentationExtraImageUrl = 'assets/img/fond-qui-suis-je.png';

  firstPresentation: any | undefined;
  secondPresentation: any | undefined;
  thirdPresentation: any | undefined;

  public isVisible = true;

  constructor(
    public presentationService: PresentationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    // Première Présentation
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;
      console.log('firstPresentation chargée :', this.firstPresentation);
      console.log('isVisible dans ngOnInit :', this.isVisible);
    });

    // Deuxième Présentation
    this.presentationService.getPresentationById(11).subscribe((data) => {
      this.secondPresentation = data;
    });

    // Troisième Présentation
    this.presentationService.getPresentationById(12).subscribe((data) => {
      this.thirdPresentation = data;
    });
  }

  ngAfterViewInit(): void {
    // Initialiser l'observateur d'intersection ici
    this.initializeIntersectionObserver();
    this.isVisible = true;
  }

  private initializeIntersectionObserver() {
    const presentationSections = document.querySelectorAll('.presentation-section');
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1 // Observer lorsque la section entière est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    presentationSections.forEach(section => {
      observer.observe(section);
    });
  }
  

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
