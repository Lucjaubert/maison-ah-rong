import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstContact: any | undefined;
  secondContact: any | undefined;

  constructor(private contactService: ContactService, private sanitizer: DomSanitizer,) {}

  ngOnInit(): void {
    this.contactService.getContactById(42).subscribe((data) => {
      this.firstContact = data; 
    });
  }
  
  sanitizeHtml(content: string): SafeHtml {  
    return this.sanitizer.bypassSecurityTrustHtml(DOMPurify.sanitize(content));
  }
}
