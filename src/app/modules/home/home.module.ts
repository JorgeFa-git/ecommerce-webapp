import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import {HomeBannerModule} from "./home-banner/home-banner.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeBannerModule,
  ]
})
export class HomeModule { }
