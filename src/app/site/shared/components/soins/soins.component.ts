import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SoinsService } from '../../services/soins.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

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

  private observer?: IntersectionObserver; 

  constructor(
    public soinsService: SoinsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadSoins();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadSoins(): void {
    this.soinsService.getSoinsById(32).subscribe((data) => {
      this.firstSoin = data;
    });

    this.soinsService.getSoinsById(34).subscribe((data) => {
      this.secondSoin = data;
    });

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
            this.observer?.unobserve(entry.target); 
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
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
