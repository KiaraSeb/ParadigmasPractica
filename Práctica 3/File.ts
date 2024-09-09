import { Node } from './Node';
import { Directory } from './Directory';

export class File extends Node {
  constructor(name: string, parent: Directory | null = null) {
    super(name, parent);
  }
}
