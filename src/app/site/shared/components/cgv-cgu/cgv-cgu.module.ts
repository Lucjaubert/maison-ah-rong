import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgvCguComponent } from './cgv-cgu.component';
import { CgvCguRoutingModule } from './cgv-cgu-routing.module';

@NgModule({
  declarations: [CgvCguComponent],
  imports: [
    CommonModule,
    CgvCguRoutingModule 
  ],
  exports: [CgvCguComponent]
})
export class CgvCguModule { }
