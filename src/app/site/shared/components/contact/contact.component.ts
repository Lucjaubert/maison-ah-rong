import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstContact: any | undefined;
  secondContact: any | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe((data) => {
      this.firstContact = data[0]; 
    });
  }
}
