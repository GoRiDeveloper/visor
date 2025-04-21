import { Routes } from '@angular/router';
import { visorRoutes } from './features/visor/visor.routes';

export const routes: Routes = [
    {
        path: "visor",
        loadComponent: () => import("./features/visor/layout/visor-layout.component")
            .then((m) => m.VisorLayoutComponent),
        children: visorRoutes
    }
];
