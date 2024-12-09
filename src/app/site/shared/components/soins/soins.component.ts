import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SoinsService } from '../../services/soins.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-soins',
  templateUrl: './soins.component.html',
  styleUrls: ['./soins.component.scss'],
})
export class SoinsComponent implements OnInit, AfterViewInit, OnDestroy {
  firstSoin: any | undefined;
  secondSoin: any | undefined;
  thirdSoin: any | undefined;
  firstSoinExtraImageUrl = 'assets/img/fond-soins.png';
  private gsapContext: gsap.Context | undefined;
  private soinsLoaded = 0;

  constructor(private soinsService: SoinsService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.soinsService.getSoinsById(32).subscribe((data) => {
      this.firstSoin = data;
      this.checkAllLoaded();
    });
    this.soinsService.getSoinsById(34).subscribe((data) => {
      this.secondSoin = data;
      this.checkAllLoaded();
    });
    this.soinsService.getSoinsById(36).subscribe((data) => {
      this.thirdSoin = data;
      this.checkAllLoaded();
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.gsapContext) {
      this.gsapContext.revert();
    }
  }

  private checkAllLoaded(): void {
    this.soinsLoaded++;
    if (this.soinsLoaded === 3) {
      setTimeout(() => {
        this.runGsapAnimations();
      }, 0);
    }
  }

  private runGsapAnimations(): void {
    this.gsapContext = gsap.context(() => {
      gsap.from('.first-section .card-img-text', {
        opacity: 0,
        x: 150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.first-section .card-img-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from('.second-section .card-text-img-3', {
        opacity: 0,
        x: -150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.second-section .card-text-img-3',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from('.third-section .card-img-text-2', {
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.third-section .card-img-text-2',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }

  sanitizeHtml(content: string): SafeHtml {
    const sanitizedContent = DOMPurify.sanitize(content);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
