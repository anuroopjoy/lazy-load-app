import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdditionalInfoComponent } from '../additional-info/additional-info.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [HomeRoutingModule, CommonModule],
  declarations: [HomeComponent, AdditionalInfoComponent],
})
export class HomeModule {}
