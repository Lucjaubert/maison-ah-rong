import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  onActivate() {
    window.scroll(0, 0);
  }  
}
