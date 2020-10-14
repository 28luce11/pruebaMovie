import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalComponent } from './internal/internal.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InternalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayaoutsModule { }
