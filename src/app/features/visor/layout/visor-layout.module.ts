import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
    imports: [RouterOutlet],
    exports: [RouterOutlet, RouterModule]
})
export class VisorLayoutModule {}