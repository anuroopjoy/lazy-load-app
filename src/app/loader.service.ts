import {
  Compiler,
  createNgModuleRef,
  Injectable,
  Injector,
  NgModuleRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}

  loadComponent(args: {
    loader: LoadChildrenCallback;
    component: string;
    container: ViewContainerRef;
  }) {
    return (args.loader() as Promise<any>).then((module) => {
      const component = module[args.component];
      args.container.createComponent(component);
    });
  }

  loadModule(args: {
    loader: LoadChildrenCallback;
    module: string;
    container: ViewContainerRef;
    injector: Injector;
    compiler?: Compiler;
  }) {
    return (args.loader() as Promise<any>).then((module) => {
      const lazymodule = module[args.module];
      let moduleRef: NgModuleRef<any>;
      if (args.compiler) {
        const moduleFactory = args.compiler.compileModuleSync(lazymodule);
        moduleRef = moduleFactory.create(args.injector);
      } else {
        moduleRef = createNgModuleRef(lazymodule, args.injector);
      }
      const component = moduleRef.instance.getComponent();
      args.container.createComponent(component, { ngModuleRef: moduleRef });
    });
  }
}
