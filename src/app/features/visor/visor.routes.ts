import { Routes } from "@angular/router";

export const visorRoutes: Routes = [
    {
        path: "",
        redirectTo: "explorer",
        pathMatch: "full"
    },
    {
        path: "explorer",
        loadComponent: () => import("./pages/explorer-page/explorer-page.component").then(
            (m) => m.ExplorerPageComponent
        )
    },
    {
        path: "pdf",
        loadComponent: () => import("./pages/pdf-page/pdf-page.component").then(
            (m) => m.PdfPageComponent
        )
    }
];