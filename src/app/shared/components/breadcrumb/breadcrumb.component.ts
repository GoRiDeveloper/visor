import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: "./breadcrumb.style.css",
  standalone: true
})
export class BreadcrumbComponent implements OnInit {
  public routesData = [
    {
      id: "axsxsx",
      name: "seccion a"
    },
    { 
      id: "kkoollxlss",
      name : "subseccion b"
    },
    {
      id: "sakdsbds",
      name: "subdireccion general"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
