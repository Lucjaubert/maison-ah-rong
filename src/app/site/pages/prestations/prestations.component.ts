import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/site/shared/services/prestations.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {

  prestations: any[] = [];

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit(): void {
    this.prestationService.getPrestations().subscribe((data) => {
      this.prestations = data;
    });
  }
}
