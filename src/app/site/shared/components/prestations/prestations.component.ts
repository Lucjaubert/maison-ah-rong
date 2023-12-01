import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements OnInit {
  firstPrestation: any | undefined;
  secondPrestation: any | undefined;
  thirdPrestation: any | undefined;

  constructor(private prestationsService: PrestationsService) {}

  ngOnInit(): void {
    // Première Prestation
    this.prestationsService.getPrestationById(39).subscribe((data) => {
      this.firstPrestation = data;
    });

    // Deuxième Prestation
    this.prestationsService.getPrestationById(40).subscribe((data) => {
      this.secondPrestation = data;
    });

    // Troisième Prestation
    this.prestationsService.getPrestationById(41).subscribe((data) => {
      this.thirdPrestation = data;
    });
  }
}
