import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from '../loader/loader.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [HomeRoutingModule, CommonModule, LoaderModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
