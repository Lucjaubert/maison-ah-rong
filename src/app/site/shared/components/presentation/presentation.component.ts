import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit, AfterViewInit, OnDestroy {
  firstPresentationExtraImageUrl = 'assets/img/fond-qui-suis-je.png';
  firstPresentation: any;
  secondPresentation: any;
  thirdPresentation: any;
  private gsapContext: gsap.Context | undefined;
  private presentationsLoaded = 0;

  constructor(private presentationService: PresentationService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadPresentations();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.gsapContext) {
      this.gsapContext.revert();
    }
  }

  private loadPresentations(): void {
    this.presentationService.getPresentationById(8).subscribe((data) => {
      this.firstPresentation = data;
      this.checkAllLoaded();
    });

    this.presentationService.getPresentationById(11).subscribe((data) => {
      this.secondPresentation = data;
      this.checkAllLoaded();
    });

    this.presentationService.getPresentationById(176).subscribe((data) => {
      this.thirdPresentation = data;
      this.checkAllLoaded();
    });
  }

  private checkAllLoaded(): void {
    this.presentationsLoaded++;
    if (this.presentationsLoaded === 3) {
      setTimeout(() => {
        this.runGsapAnimations();
      }, 0);
    }
  }

  private runGsapAnimations(): void {
    this.gsapContext = gsap.context(() => {
      gsap.from('.first-section .card-text-img', {
        opacity: 0,
        x: 150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.first-section .card-text-img',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      gsap.from('.second-section .card-img-text', {
        opacity: 0,
        x: -150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.second-section .card-img-text',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      gsap.from('.third-section .card-text-img-2', {
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.third-section .card-text-img-2',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  sanitizeHtml(content: string): SafeHtml {
    const sanitizedContent = DOMPurify.sanitize(content);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
