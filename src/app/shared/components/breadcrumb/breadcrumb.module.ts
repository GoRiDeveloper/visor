import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule as PrimeBreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  imports: [CommonModule],
  exports: [PrimeBreadcrumbModule],
})
export class BreadcrumbModule {}