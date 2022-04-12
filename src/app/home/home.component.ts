import { Component, OnInit } from '@angular/core';
import { Loader } from '../loader/loader.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'lazy-load-app';
  showInfo = false;

  lazyModuleConfig: Loader = {
    loader: () => import('../additional-info/additional-info.module'),
    module: 'AdditionalInfoModule',
  };
  // lazyModuleConfig: Loader = {
  //   loader: () => import('../additional-info/additional-info.component'),
  //   component: 'AdditionalInfoComponent',
  // };

  constructor() {}

  ngOnInit(): void {}

  showAdditionalInfo() {
    this.showInfo = true;
  }
}
