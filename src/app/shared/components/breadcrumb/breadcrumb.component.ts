import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { explorerGetter } from '../../../features/visor/utils';
import { ExplorerService, StateService } from '../../../features/visor/services';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: "./breadcrumb.style.css",
  standalone: true
})
export class BreadcrumbComponent implements OnInit {
  @Input() routes: { id: string; name: string; path: string }[] = [];

  constructor(
    private router: Router,
    private _explorerService: ExplorerService,
    private _stateService: StateService
  ) {}

  ngOnInit() {}

  async redirectPath(id: string) {
    const data = await this._explorerService.getFiles();
    const explorerData = explorerGetter(id, data);
    const idChanged = this._stateService.getId() !== id;

    if(idChanged)
      this._stateService.setId(id);
    
    if(explorerData?.currentPath)
      this._stateService.setState(explorerData?.currentPath, explorerData?.paths);

    if (this.router.url.includes("/visor/explorer") && idChanged) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(
        () => this.router.navigate(["/visor/explorer"])
      )
    } else {
      this.router.navigate(["/visor/explorer"]);
    }
  }

  redirectHome() {
    this._stateService.removeId();
    
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(
      () => this.router.navigate(["/visor/explorer"])
    );
  }
}
