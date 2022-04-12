import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdditionalInfoComponent } from './additional-info.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdditionalInfoComponent],
})
export class AdditionalInfoModule {
  getComponent() {
    return AdditionalInfoComponent;
  }
}
