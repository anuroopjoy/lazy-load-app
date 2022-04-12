import { NgModule } from '@angular/core';

import { LazyLoaderDirective } from './lazy-loader.directive';

@NgModule({
  declarations: [LazyLoaderDirective],
  imports: [],
  providers: [],
  exports: [LazyLoaderDirective],
})
export class LoaderModule {}
