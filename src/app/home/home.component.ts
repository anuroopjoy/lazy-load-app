import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'lazy-load-app';
  showInfo = false;
  constructor() {}

  ngOnInit(): void {}
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
