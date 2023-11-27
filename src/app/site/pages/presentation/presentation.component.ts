import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../shared/services/presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  presentations: any[] = [];

  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.presentationService.getPresentation().subscribe((data) => {
      this.presentations = data;
    });
  }
}