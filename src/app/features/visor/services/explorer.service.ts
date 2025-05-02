import { Injectable } from "@angular/core";

import { explorerGetter } from "../utils";
import { ExplorerDataInterface } from "../interface";

@Injectable({
    providedIn: 'root',
})
export class ExplorerService {
    constructor() {}

    async getFiles(): Promise<ExplorerDataInterface[]> {
        const dataBlank = await fetch("/assets/database/explorer.json", { method: "GET" });
        const data = await dataBlank.json();

        return data.filter((item: any) => "id" in item);
    }

    async getFileWithPath(id: string): Promise<{
        currentPath: string;
        data: ExplorerDataInterface[] | null;
        paths: { id: string; name: string; path: string }[];
    } | null> {
        const data = await this.getFiles();
      
        return explorerGetter(id, data);
    }
}