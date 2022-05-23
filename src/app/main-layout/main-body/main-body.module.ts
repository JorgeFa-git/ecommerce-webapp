import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import {AppRoutingModule} from "src/app/main-layout/app-routing.module";



@NgModule({
    declarations: [
        MainBodyComponent
    ],
    exports: [
        MainBodyComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MainBodyModule { }
