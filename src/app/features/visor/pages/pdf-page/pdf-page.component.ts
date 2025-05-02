import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

import { StateService } from "../../services";
import { BreadcrumbComponent } from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
    selector: "app-pdf-page",
    templateUrl: "./pdf-page.component.html",
    styleUrl: "./pdf-page.style.css",
    standalone: true,
    imports: [NgxExtendedPdfViewerModule, BreadcrumbComponent],
    providers: [NgxExtendedPdfViewerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfPageComponent implements OnInit {
    public pathData: { id: string; name: string; path: string; }[] = [];

    constructor(private _stateService: StateService) {}

    ngOnInit() {
        document.body.classList.add("border-background");
        this.pathData = this._stateService.getState().paths;
    }

    ngOnDestroy() {
        document.body.classList.remove("border-background");
    }
}