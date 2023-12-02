import { Component, OnInit } from '@angular/core';
import { SoinsService } from '../../services/soins.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-soins',
  templateUrl: './soins.component.html',
  styleUrls: ['./soins.component.scss'],
})
export class SoinsComponent implements OnInit {
  firstSoin: any | undefined;
  firstSoinImageUrl: string | undefined;

  secondSoin: any | undefined;
  secondSoinImageUrl: string | undefined;

  thirdSoin: any | undefined;
  thirdSoinImageUrl: string | undefined;

  constructor(
    public soinsService: SoinsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Premier Soin
    this.soinsService.getSoinsById(32).subscribe((data) => {
      this.firstSoin = data;
      this.firstSoinImageUrl = this.extractImageUrlFromContent(data);
    });

    // Deuxième Soin
    this.soinsService.getSoinsById(34).subscribe((data) => {
      this.secondSoin = data;
      this.secondSoinImageUrl = this.extractImageUrlFromContent(data);
    });

    // Troisième Soin
    this.soinsService.getSoinsById(36).subscribe((data) => {
      this.thirdSoin = data;
      this.thirdSoinImageUrl = this.extractImageUrlFromContent(data);
    });
  }

  private extractImageUrlFromContent(soin: any): string | undefined {
    if (soin && soin.featured_media_url) {
      return soin.featured_media_url;
    }
    return undefined;
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
