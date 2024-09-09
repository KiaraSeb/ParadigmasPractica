export abstract class Node {
    name: string;
    parent: Node | null; // Cambiado de Directory a Node
  
    constructor(name: string, parent: Node | null = null) {
      this.name = name;
      this.parent = parent;
    }
  
    getPath(): string {
      if (!this.parent) {
        return this.name;
      }
      return `${this.parent.getPath()}/${this.name}`;
    }
  }
  