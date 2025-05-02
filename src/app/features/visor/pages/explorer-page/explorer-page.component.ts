import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { BreadcrumbComponent } from "../../../../shared/components/breadcrumb/breadcrumb.component";
import { ExplorerService, StateService } from "../../services";
import type { ExplorerDataInterface, FileType } from "../../interface";

const iconMap: Record<FileType, string> = {
    folder: 'assets/icons/icon-carpeta.png',
    image: 'assets/icons/icon-imagen.png',
    pdf: 'assets/icons/icon-pdf.png',
    file: 'assets/icons/document.svg',
};

@Component({
    selector: "app-explorer-page",
    templateUrl: "./explorer-page.component.html",
    styleUrl: "./explorer-page.style.css",
    standalone: true,
    imports: [BreadcrumbComponent]
})
export class ExplorerPageComponent implements OnInit {
    public data: ExplorerDataInterface[] = [];
    public pathData: { id: string; name: string; path: string; }[] = [];

    constructor(
        private router: Router,
        private _stateService: StateService,
        private _explorerService: ExplorerService
    ) {}

    async ngOnInit() {
        const id = this._stateService.getId();

        if (id) {
            const data = await this._explorerService.getFileWithPath(id);

            if (data?.data) this.data = data.data;
            if (data?.paths) this.pathData = data.paths;
        } else {
            this.data = await this._explorerService.getFiles();
        };
    }

    getIcon(type: FileType) {
        return iconMap[type];
    }

    async selectItem(id: string, type: FileType) {
        const file = await this._explorerService.getFileWithPath(id);

        if (file?.paths) this.pathData = file.paths;
        if (file?.data === null) {
            this._stateService.setState(file.currentPath, file.paths);
            this.router.navigate(["/visor/pdf"]);
        };

        this.data = file?.data ? file.data : await this._explorerService.getFiles();
    } 
}