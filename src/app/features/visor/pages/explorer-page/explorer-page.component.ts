import { Component, OnInit } from "@angular/core";
import { BreadcrumbComponent } from "../../../../shared/components/breadcrumb/breadcrumb.component";

type FileType = 'folder' | 'image' | 'pdf' | 'file';

interface ExplorerDataInterface {
    id: string;
    name: string;
    type: FileType;
}

const iconMap: Record<Partial<FileType>, string> = {
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
    public data: ExplorerDataInterface[] = [
        {
            id: "45vfs",
            name: "ACCENDO",
            type: "folder"
        },
        {
            id: "w6xcv",
            name: "BAFAMSA",
            type: "folder"
        },
        {
            id: "akn211",
            name: "ELEKTRA",
            type: "file"
        },
        {
            id: "s9cssds",
            name: "AZTECA",
            type: "folder"
        },
        {
            id: "45vfs",
            name: "ACCENDO1",
            type: "folder"
        },
        {
            id: "w6xcv",
            name: "BAFAMSA1",
            type: "folder"
        },
        {
            id: "akn211",
            name: "ELEKTRA1",
            type: "file"
        },
        {
            id: "s9cssds",
            name: "AZTECA1",
            type: "folder"
        },
        {
            id: "45vfs",
            name: "ACCENDO2",
            type: "file"
        },
        {
            id: "w6xcv",
            name: "BAFAMSA2",
            type: "folder"
        },
        {
            id: "akn211",
            name: "ELEKTRA2",
            type: "folder"
        },
        {
            id: "s9cssds",
            name: "AZTECA2",
            type: "file"
        }
    ];

    constructor() {}

    ngOnInit() {}

    getIcon(type: FileType) {
        return iconMap[type];
    }
}