import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner.component';



@NgModule({
  declarations: [
    HomeBannerComponent
  ],
  exports: [
    HomeBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeBannerModule { }
