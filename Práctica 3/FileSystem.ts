import { Directory } from './Directory';
import { File } from './File';

export class FileSystem {
  root: Directory;
  currentDirectory: Directory;

  constructor() {
    this.root = new Directory("root");
    this.currentDirectory = this.root;
  }

  mkdir(dirName: string) {
    const newDir = new Directory(dirName, this.currentDirectory);
    this.currentDirectory.add(newDir);
  }

  touch(fileName: string) {
    const newFile = new File(fileName, this.currentDirectory);
    this.currentDirectory.add(newFile);
  }

  cd(dirName: string) {
    if (dirName === "..") {
      if (this.currentDirectory.parent && this.currentDirectory.parent instanceof Directory) {
        // Asegurarse de que parent es un Directory antes de asignarlo
        this.currentDirectory = this.currentDirectory.parent;
      }
      return;
    }

    this.currentDirectory = this.currentDirectory.getDirectory(dirName);
  }

  ls() {
    console.log(this.currentDirectory.list().join("\n"));
  }

  lsp() {
    const list = this._getAllFiles(this.root, []);
    require("fs").writeFileSync("display.txt", list.join("\n"));
  }

  _getAllFiles(dir: Directory, list: string[]): string[] {
    dir.contents.forEach((node) => {
      if (node instanceof File) {
        list.push(node.getPath());
      } else if (node instanceof Directory) {
        this._getAllFiles(node, list);
      }
    });
    return list;
  }

  pwd() {
    console.log(this.currentDirectory.getPath());
  }
}
