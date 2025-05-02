import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Esto asegura que el servicio sea singleton
})
export class StateService {
  private pathId?: string;
  private currentPath: string | undefined;
  private paths: { id: string; name: string; path: string; }[] = [];

  // Métodos para establecer y obtener los datos
  setState(currentPath: string, paths: { id: string; name: string; path: string; }[]): void {
    this.currentPath = currentPath;
    this.paths = paths;
  }

  getState(): { currentPath: string | undefined, paths: { id: string; name: string; path: string; }[] } {
    return { currentPath: this.currentPath, paths: this.paths };
  }

  setId(id: string) {
    this.pathId = id;
  }

  getId(): string | undefined {
    return this.pathId;
  }

  removeId() {
    this.pathId = undefined;
  }
}
