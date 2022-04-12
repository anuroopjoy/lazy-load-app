import {
  // Compiler,
  Component,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'lazy-load-app';
  showInfo = false;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(
    private injector: Injector,
    private loader: LoaderService // private compiler: Compiler
  ) {}

  ngOnInit(): void {}
  showAdditionalInfo() {
    if (!this.showInfo) {
      // this.loader.loadComponent({
      //   loader: () => import('../additional-info/additional-info.component'),
      //   component: 'AdditionalInfoComponent',
      //   container: this.container,
      // });
      this.loader.loadModule({
        loader: () => import('../additional-info/additional-info.module'),
        module: 'AdditionalInfoModule',
        container: this.container,
        injector: this.injector,
        // compiler: this.compiler,
      });
    }
    this.showInfo = true;
  }
}
