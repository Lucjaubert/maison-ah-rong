import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SoinsService } from '../../services/soins.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-soins',
  templateUrl: './soins.component.html',
  styleUrls: ['./soins.component.scss'],
})
export class SoinsComponent implements OnInit, AfterViewInit, OnDestroy {
  firstSoin: any | undefined;
  firstSoinImageUrl: string | undefined;

  secondSoin: any | undefined;
  secondSoinImageUrl: string | undefined;

  thirdSoin: any | undefined;
  thirdSoinImageUrl: string | undefined;

  firstSoinExtraImageUrl = 'assets/img/fond-soins.png';

  private observer?: IntersectionObserver; // Make observer optional

  constructor(
    public soinsService: SoinsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Load data for first, second, and third soin
    this.loadSoins();
  }

  ngAfterViewInit(): void {
    // Setup Intersection Observer after view initialization
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    // Disconnect observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadSoins(): void {
    // Premier Soin
    this.soinsService.getSoinsById(32).subscribe((data) => {
      this.firstSoin = data;
    });

    // Deuxième Soin
    this.soinsService.getSoinsById(34).subscribe((data) => {
      this.secondSoin = data;
    });

    // Troisième Soin
    this.soinsService.getSoinsById(36).subscribe((data) => {
      this.thirdSoin = data;
    });
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'function') {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target); // Stop observing after intersection
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger animation when 50% of the section is visible
      });

      const sections = document.querySelectorAll('.soin-container');
      sections.forEach((section) => this.observer?.observe(section));
    } else {
      console.error('IntersectionObserver is not supported in this browser.');
    }
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
