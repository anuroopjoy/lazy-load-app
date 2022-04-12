import {
  Compiler,
  Directive,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { Loader } from './loader.interface';
import { LoaderService } from './loader.service';

@Directive({
  selector: '[appLazyLoader]',
})
export class LazyLoaderDirective implements OnChanges {
  @Input() appLazyLoader!: Loader;
  constructor(
    private container: ViewContainerRef,
    private injector: Injector,
    private compiler: Compiler,
    private loader: LoaderService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['appLazyLoader'].currentValue) {
      return;
    }
    const { loader, module, component } = this.appLazyLoader;
    if (component) {
      this.loader.loadComponent({
        loader,
        component,
        container: this.container,
      });
    } else if (module) {
      this.loader.loadModule({
        loader,
        module,
        container: this.container,
        injector: this.injector,
        // compiler: this.compiler,
      });
    }
  }
}
