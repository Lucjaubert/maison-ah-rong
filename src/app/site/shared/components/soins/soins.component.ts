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

  firstSoinExtraImageUrl = 'assets/img/fond-soins.png';

  constructor(
    public soinsService: SoinsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
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

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
