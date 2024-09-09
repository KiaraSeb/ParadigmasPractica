import { Node } from './Node'; 

export class Directory extends Node {
  contents: Map<string, Node>;

  constructor(name: string, parent: Directory | null = null) {
    super(name, parent);
    this.contents = new Map();
  }

  add(node: Node) {
    if (this.contents.has(node.name)) {
      throw new Error(`A file or folder with the name '${node.name}' already exists in this directory.`);
    }
    this.contents.set(node.name, node);
  }

  list(): string[] {
    return Array.from(this.contents.keys()).sort();
  }

  getDirectory(name: string): Directory {
    const node = this.contents.get(name);
    if (node instanceof Directory) {
      return node;
    }
    throw new Error(`'${name}' is not a directory.`);
  }
}
