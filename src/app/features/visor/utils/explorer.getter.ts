import { ExplorerDataInterface } from "../interface";

export const explorerGetter = (
    id: string,
    items: ExplorerDataInterface[],
    accumulatedPath: string = '',
    collectedPaths: { id: string; name: string; path: string }[] = []
) : {
    id: string,
    currentPath: string;
    data: ExplorerDataInterface[] | null;
    paths: { id: string; name: string; path: string }[];
} | null => {
    for (const item of items) {
        const currentPath = `${accumulatedPath}${item.path}`;
        const newPaths = [
            ...collectedPaths,
            { id: item.id, name: item.name, path: item.path }
        ];

        if (item.id === id) {
            const children = typeof item.children === 'boolean' ? null : item.children;
            return {
                id,
                currentPath,
                data: children,
                paths: newPaths
            };
        }

        if (item.children && Array.isArray(item.children)) {
            const result = explorerGetter(id, item.children, currentPath, newPaths);

            if (result) {
                return result;
            }
        }
    }

    return null;
}