import { Component, OnInit } from '@angular/core';
import { VisorLayoutModule } from './visor-layout.module';

/**
 * Componente para el diseño de la sección del visor.
 */
@Component({
  selector: 'visor-layout',
  templateUrl: './visor-layout.component.html',
  standalone: true,
  imports: [VisorLayoutModule],
})
export class VisorLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}