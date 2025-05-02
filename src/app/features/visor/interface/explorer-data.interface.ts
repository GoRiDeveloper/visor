export type FileType = 'folder' | 'image' | 'pdf' | 'file';

export interface ExplorerDataInterface {
    id: string;
    name: string;
    type: FileType;
    path: string;
    children: ExplorerDataInterface[] | boolean;
}