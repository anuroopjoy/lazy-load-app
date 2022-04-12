import { LoadChildrenCallback } from '@angular/router';

export interface Loader {
  loader: LoadChildrenCallback;
  module?: string;
  component?: string;
}
