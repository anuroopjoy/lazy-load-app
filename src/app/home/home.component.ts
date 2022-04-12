import {
  Compiler,
  Component,
  createNgModuleRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

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
  constructor(private injector: Injector) // , private compiler: Compiler
  {}

  ngOnInit(): void {}
  showAdditionalInfo() {
    if (!this.showInfo) {
      // import('../additional-info/additional-info.component').then((module) => {
      //   const component = module['AdditionalInfoComponent'];
      //   this.container.createComponent(component);
      // });
      import('../additional-info/additional-info.module').then((module) => {
        const lazymodule = module['AdditionalInfoModule'];
        const moduleRef = createNgModuleRef(lazymodule, this.injector);
        // const moduleFactory = this.compiler.compileModuleSync(lazymodule);
        // const moduleRef = moduleFactory.create(this.injector);
        const component = moduleRef.instance.getComponent();
        this.container.createComponent(component, { ngModuleRef: moduleRef });
      });
    }
    this.showInfo = true;
  }
}
