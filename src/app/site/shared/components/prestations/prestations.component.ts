import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements OnInit, AfterViewInit, OnDestroy {
  firstPrestation: any | undefined;
  secondPrestation: any | undefined;
  thirdPrestation: any | undefined;
  firstPrestationExtraImageUrl = 'assets/img/fond-prestations.png';
  private gsapContext: gsap.Context | undefined;
  private prestationsLoaded = 0;

  constructor(private prestationsService: PrestationsService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.prestationsService.getPrestationById(39).subscribe((data) => {
      this.firstPrestation = data;
      this.checkAllLoaded();
    });
    this.prestationsService.getPrestationById(40).subscribe((data) => {
      this.secondPrestation = data;
      this.checkAllLoaded();
    });
    this.prestationsService.getPrestationById(41).subscribe((data) => {
      this.thirdPrestation = data;
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
    this.prestationsLoaded++;
    if (this.prestationsLoaded === 3) {
      setTimeout(() => {
        this.runGsapAnimations();
      }, 0);
    }
  }

  private runGsapAnimations(): void {
    this.gsapContext = gsap.context(() => {

      gsap.from('.prestation-container .first-prestation .text-grey', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.first-prestation .text-grey',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.prestation-container .second-prestation .text-grey', {
        opacity: 0,
        x: -50,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.second-prestation .text-grey',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.prestation-container .third-prestation .text-grey', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.third-prestation .text-grey',
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
